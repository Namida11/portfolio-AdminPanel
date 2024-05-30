const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");

const getAllData = async () => {
  const result = await baseService.getAllData(JSON_KEYS.ABOUT);
  return new SuccessResult(null, result);
};

const insertData = async (model) => {
  const newAbout = await baseService.insertData(JSON_KEYS.ABOUT, model);
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newAbout);
};

module.exports = {
  getAllData,
  insertData,
};
