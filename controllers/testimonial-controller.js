const loadEJS = require("../utils/load-ejs");
const testimonialServices = require("../services/testimonial-service");
const { generateResponce } = require("../utils/common");
const ResponceConfig = require("../utils/responce-config");
const { CONTENT_TYPES } = require("../utils/constant");
const { parseFormData } = require("../utils/test");
const saveCloudinary = require("../utils/save-cloud");
const { url } = require("../utils/cloudinary");

const getTestimonialPage = (req, res) => {
  loadEJS("testimonial", req, res);
};

const getAllTestimonial = async (req, res) => {
  const result = await testimonialServices.getAllTestimonial();

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

const createReview = async (req, res) => {
  const formData = await parseFormData(req);

  const file = formData.files.files[0];

  const imageUrl = await saveCloudinary(file, "testimonial");
  const { fullname, review, position } = formData.fields;

  const newReview = {
    fullname: fullname[0],
    review: review[0],
    position: position[0],
    image: { url: imageUrl },
  };

  const result = await testimonialServices.insertTestimonial(newReview);

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
  getTestimonialPage,
  getAllTestimonial,
  createReview,
};
