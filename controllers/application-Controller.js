const Application = require("../models/applicationModel");
const applicationService = require("../services/applicationService");
const { generateResponce, parseRequestBody } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const loadEJS = require("../utils/load-ejs");
const ResponceConfig = require("../utils/responce-config");

const getApplicationPage = (req, res) => {
  loadEJS("application", req, res);
};
const getAllApllication = async (req, res) => {
  const result = await applicationService.getAllAplication();
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

const createApplication = async (req, res) => {
  const body = await parseRequestBody(req);
  const newApp = new Application(body);
  const result = await applicationService.createApplication(newApp);

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

module.exports = {
  getApplicationPage,
  getAllApllication,
  createApplication,
};
