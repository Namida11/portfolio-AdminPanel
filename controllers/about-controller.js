const loadEJS = require("../utils/load-ejs");
const aboutService = require("../services/about-service");
const { generateResponce } = require("../utils/common");
const ResponceConfig = require("../utils/responce-config");
const { CONTENT_TYPES } = require("../utils/constant");
const About = require("../models/aboutModel");
const { parseFormData } = require("../utils/test");
const saveCloudinary = require("../utils/save-cloud");
const { insertData } = require("../services/base-service");

const getAboutPage = (req, res) => {
  loadEJS("about", req, res);
};

const getAllData = async (req, res) => {
  const result = await aboutService.getAllData();
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

const createData = async (req, res) => {
  const formData = await parseFormData(req);
  const file = formData.files.files[0];
  console.log(file);
  const imageUrl = await saveCloudinary(file);
  const { name, email, phone, twitter } = formData.fields;
  const newAbout = {
    name: name[0],
    email: email[0],
    phone: phone[0],
    twitter: twitter[0],
    image: { url: imageUrl },
  };

  const result = await aboutService.insertData(newAbout);

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
  getAboutPage,
  getAllData,
  createData,
};
