const fs = require("fs");
const path = require("path");
const util = require("util");
const getRootPath = require("../utils/root-path");
const { generateId } = require("../utils/common");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const DB_PATH = `${getRootPath()}database/db.json`;
console.log(DB_PATH);

const readAllJSONFromText = async () => {
  const text = await readFileAsync(DB_PATH);
  return JSON.parse(text);
};

const getAllData = async (JSON_KEY) => {
  const allData = await readAllJSONFromText();
  return allData[JSON_KEY];
};
const getData = async (JSON_KEY, id) => {
  const allData = await readAllJSONFromText();
  return allData[JSON_KEY].find((data) => data.id === id);
};

const insertData = async (JSON_KEY, model) => {
  const allData = await readAllJSONFromText();
  const modelForAdding = { id: generateId(allData[JSON_KEY]), ...model };
  allData[JSON_KEY].push(modelForAdding);
  await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
  return modelForAdding;
};

const deleteData = async (JSON_KEY, id) => {
  const allData = await readAllJSONFromText();
  const deleted = allData[JSON_KEY].filter((data) => data.id !== id);

  allData[JSON_KEY] = allData[JSON_KEY].filter((data) => data.id !== id);

  allData[JSON_KEY].forEach((data, index) => {
    data.id = index + 1;
  });

  await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
  return deleted;
};

const updateData = async (JSON_KEY, model) => {
  const allData = await readAllJSONFromText();
  const index = allData[JSON_KEY].findIndex((data) => data.id === model.id);
  if (index !== -1) {
    allData[JSON_KEY][index] = { ...allData[JSON_KEY][index], ...model };
    await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
    return allData[JSON_KEY][index];
  } else {
    throw new Error(`Data with id ${model.id} not found`);
  }
};

module.exports = {
  getAllData,
  getData,
  insertData,
  deleteData,
  updateData,
};
