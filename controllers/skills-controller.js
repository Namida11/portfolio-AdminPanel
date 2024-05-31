const loadEJS = require("../utils/load-ejs");
const skillServices = require("../services/skills-service");
const { generateResponce, parseRequestBody } = require("../utils/common");
const ResponceConfig = require("../utils/responce-config");
const { CONTENT_TYPES } = require("../utils/constant");
const model = require("../models/skillModel");
const Skill = require("../models/skillModel");

const getSkillPage = (req, res) => {
  loadEJS("skills", req, res);
};

const getAllSkills = async (req, res) => {
  const result = await skillServices.getSkillService();
  generateResponce(
    new ResponceConfig(
      200,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(result)
    )
  );
};

const insertSkill = async (req, res) => {
  const body = await parseRequestBody(req);
  const skill = new Skill(body.name, body.percentage);
  const result = await skillServices.insertSkill(skill);

  generateResponce(
    new ResponceConfig(
      201,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(result)
    )
  );
};

const getSkill = async (req, res, id) => {
  console.log(id, "get id");
  const result = await skillServices.getByIdSkill(id);
  console.log(result, "skill result");
  generateResponce(
    new ResponceConfig(
      200,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(result)
    )
  );
};

const deleteSkill = async (req, res, id) => {
  const result = await skillServices.deleteSkill(id);
  console.log(id, "deleted id");
  generateResponce(
    new ResponceConfig(200, req, res, CONTENT_TYPES[".json"]),
    JSON.stringify(result)
  );
};

const updateDataSkill = async (req, res, id) => {
  const body = await parseRequestBody(req);

  let updatedSkill = new Skill({ id: id, ...body });

  console.log(id, "updatedid");
  console.log(updatedSkill, "updated skill");
  const result = await skillServices.updateDataSkill(updatedSkill);
  generateResponce(
    new ResponceConfig(
      200,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(result)
    )
  );
};

module.exports = {
  getSkillPage,
  getAllSkills,
  insertSkill,
  getSkill,
  deleteSkill,
  updateDataSkill,
};
