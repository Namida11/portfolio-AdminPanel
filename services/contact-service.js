const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");

const getAllContact = async () => {
  const result = await baseService.getAllData(JSON_KEYS.CONTACT);
  return new SuccessResult(null, result);
};
const getContact = async (id) => {
  const result = await baseService.getData(JSON_KEYS.CONTACT, id);
  return new SuccessResult(null, result);
};
const insertContact = async (model) => {
  const newContact = await baseService.insertData(JSON_KEYS.CONTACT, model);
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newContact);
};

const deleteContact = async (id) => {
  const result = await baseService.deleteData(JSON_KEYS.CONTACT, id);
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.DELETE_MESSAGE, result);
};

const updateContact = async (model) => {
  const updateData = await baseService.updateData(JSON_KEYS.CONTACT, model);
  return new SuccessResult(
    COMMON_OPERATIONS_MESSAGES.UPTADE_MESSAGE,
    updateData
  );
};

module.exports = {
  getAllContact,
  getContact,
  insertContact,
  deleteContact,
  updateContact,
};
