const portfolioService = require("../services/portfolio-service");
const { generateResponce, parseRequestBody } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const ResponceConfig = require("../utils/responce-config");

const cloudinary = require("../utils/cloudinary");
const formidable = require("formidable");
const path = require("path");
const { parseFormData } = require("../utils/test");
const saveCloudinary = require("../utils/save-cloud");

const loadEJS = require("../utils/load-ejs");

// const getSaveCloud = (req, res) => {
//   loadEJS("save-cloud", req, res);
// };

const getPortfolioPage = (req, res) => {
  loadEJS("portfolio", req, res);
};

const getAllPortolio = async (req, res) => {
  const result = await portfolioService.getAllPortfolioes();
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

const createPortfolio = async (req, res) => {
  const formData = await parseFormData(req);
  const file = formData.files.files[0];

  const imageUrl = await saveCloudinary(file);
  const { name, category } = formData.fields;
  const portfolio = {
    name: name[0],
    category: category[0],
    image: { url: imageUrl },
  };
  const result = await portfolioService.insertPortfolio(portfolio);
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
  getPortfolioPage,
  getAllPortolio,
  createPortfolio,
};
