const loadEJS = require("../utils/load-ejs");

const getDefaultPage = (req, res) => {
  loadEJS("default", req, res);
};

module.exports = {
  getDefaultPage,
};
