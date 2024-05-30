const Service = require("../models/servicesModel");
const servicesService = require("../services/services-service");
const { generateResponce, parseRequestBody } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const ResponceConfig = require("../utils/responce-config");
const loadEJS = require("../utils/load-ejs");
const cloudinary = require("../utils/cloudinary");
const formidable = require("formidable");
const path = require("path");
const { parseFormData } = require("../utils/test");
const saveCloudinary = require("../utils/save-cloud");

const getServicePage = (req, res) => {
  loadEJS("service", req, res);
};

const getSaveCloud = (req, res) => {
  loadEJS("save-cloud", req, res);
};

const getAllServices = async (req, res) => {
  const result = await servicesService.getAllServices();

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

const getService = async (req, res, id) => {
  const result = await servicesService.getByIdService(id);
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

const deleteService = async (req, res, id) => {
  const result = await servicesService.deleteService(id);

  generateResponce(
    new ResponceConfig(200, req, res, CONTENT_TYPES[".json"]),
    JSON.stringify(result)
  );
};

const updateService = async (req, res, id) => {
  const formData = await parseFormData(req);
  const file = formData.files.files[0];
  const imageUrl = await saveCloudinary(file);
  const { name, description } = formData.fields;
  const newService = {
    id: id,
    name: name[0],
    description: description[0],
    image: { url: imageUrl },
  };
  // const body = await parseRequestBody(req);
  // const newService = new Service(body);

  const result = await servicesService.updateDataService(newService);
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
const createService = async (req, res) => {
  const formData = await parseFormData(req);
  const file = formData.files.files[0];

  const imageUrl = await saveCloudinary(file);
  const { name, description } = formData.fields;
  const service = {
    name: name[0],
    description: description[0],
    image: { url: imageUrl },
  };
  const result = await servicesService.insertServices(service);
  console.log(result);

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
  getAllServices,
  getService,
  createService,
  getServicePage,
  updateService,
  deleteService,
  getSaveCloud,
};
