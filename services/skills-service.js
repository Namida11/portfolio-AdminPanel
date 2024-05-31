const { parseRequestBody } = require("../utils/common");
const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");

const getSkillService = async () => {
  const datas = await baseService.getAllData(JSON_KEYS.SKILLS);
  console.log(datas, "slil dats");
  return new SuccessResult(null, datas);
};

const insertSkill = async (model) => {
  const newSkill = await baseService.insertData(JSON_KEYS.SKILLS, model);

  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newSkill);
};
const getByIdSkill = async (id) => {
  const result = baseService.getData(JSON_KEYS.SKILLS, id);
  return new SuccessResult("get data", result);
};
const deleteSkill = async (id) => {
  const result = await baseService.deleteData(JSON_KEYS.SKILLS, id);
  console.log(result, " RESULT");
  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.DELETE_MESSAGE, result);
};

const updateDataSkill = async (model) => {
  const updatedData = await baseService.updateData(JSON_KEYS.SKILLS, model);
  console.log(model);
  return new SuccessResult(
    COMMON_OPERATIONS_MESSAGES.UPTADE_MESSAGE,
    updatedData
  );
};

module.exports = {
  getSkillService,
  insertSkill,
  getByIdSkill,
  updateDataSkill,
  deleteSkill,
};
