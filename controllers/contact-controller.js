const contactService = require("../services/contact-service");
const { image } = require("../utils/cloudinary");
const { generateResponce } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const loadEJS = require("../utils/load-ejs");
const ResponceConfig = require("../utils/responce-config");
const saveCloudinary = require("../utils/save-cloud");
const { parseFormData } = require("../utils/test");

const getContactPage = (req, res) => {
  loadEJS("contact", req, res);
};
const getAllContact = async (req, res) => {
  const result = await contactService.getAllContact();
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

const getContactController = async (req, res, id) => {
  const result = await contactService.getContact(id);
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

const createContact = async (req, res) => {
  const formData = await parseFormData(req);

  const file = formData.files.files[0];
  const imageUrl = await saveCloudinary(file, "contact");

  const { name, info } = formData.fields;

  const newContact = {
    name: name[0],
    image: { url: imageUrl },
    info: info[0],
  };

  const result = await contactService.insertContact(newContact);

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
const deleteContact = async (req, res, id) => {
  const result = await contactService.deleteContact(id);
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

const updateContact = async (req, res, id) => {
  const formData = await parseFormData(req);
  const file = formData.files.files[0];
  const imageUrl = await saveCloudinary(file, "contact");
  const { name, info } = formData.fields;
  const newContact = {
    id: id,
    name: name[0],
    image: { url: imageUrl },
    info: info[0],
  };

  const result = await contactService.updateContact(newContact);

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
  getContactPage,
  getAllContact,
  getContactController,
  createContact,
  deleteContact,
  updateContact,
};
