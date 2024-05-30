const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");

const getAllContact = async () => {
  const result = await baseService.getAllData(JSON_KEYS.CONTACT);
  return new SuccessResult(null, result);
};

const insertContact = async (model) => {
  const newContact = await baseService.insertData(JSON_KEYS.CONTACT, model);
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newContact);
};

module.exports = {
  getAllContact,
  insertContact,
};
