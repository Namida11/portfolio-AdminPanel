const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");
const validationApplication = require("../validations/application-validations");

const getAllAplication = async () => {
  const res = await baseService.getAllData(JSON_KEYS.APPLICATION);
  return new SuccessResult(null, res);
};
/**
 * @param {Application} model
 * @returns
 */
const createApplication = async (model) => {
  const validationResults = validationApplication(model);
  if (!validationResults.success) return validationResults;

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
