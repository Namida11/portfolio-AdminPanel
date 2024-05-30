const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");

const getAllAplication = async () => {
  const res = await baseService.getAllData(JSON_KEYS.APPLICATION);
  return new SuccessResult(null, res);
};

const createApplication = async (model) => {
  const newApplication = await baseService.insertData(
    JSON_KEYS.APPLICATION,
    model
  );
  return new SuccessResult(
    COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE,
    newApplication
  );
};

module.exports = {
  getAllAplication,
  createApplication,
};
