const baseService = require("./base-service");
const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult, ErrorResult } = require("../utils/result");
const Service = require("../models/servicesModel");

const validationService = require("../validations/service-validation");

const getAllServices = async () => {
  const datas = await baseService.getAllData(JSON_KEYS.SERVICES);
  return new SuccessResult(null, datas);
};

const getByIdService = async (id) => {
  const result = baseService.getData(JSON_KEYS.SERVICES, id);
  return new SuccessResult("get data", result);
};
/**
 *
 * @param {Service} model
 * @returns
 */
const insertServices = async (model) => {
  const validationResults = validationService(model);
  if (!validationResults.success) return validationResults;
  const newUser = await baseService.insertData(JSON_KEYS.SERVICES, model);
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newUser);
};

const deleteService = async (id) => {
  const result = await baseService.deleteData(JSON_KEYS.SERVICES, id);
  console.log(result, " RESULT");
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.DELETE_MESSAGE, result);
};

const updateDataService = async (model) => {
  const updatedData = await baseService.updateData(JSON_KEYS.SERVICES, model);
  console.log(model);
  return new SuccessResult(
    COMMON_OPERATIONS_MESSAGES.UPTADE_MESSAGE,
    updatedData
  );
};
module.exports = {
  getAllServices,
  getByIdService,
  insertServices,
  deleteService,
  updateDataService,
};
