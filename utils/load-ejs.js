const path = require("path");
const ejs = require("ejs");
const getRootPath = require("./root-path");
const fs = require("fs");
const { CONTENT_TYPES } = require("./constant");
const { generateResponce } = require("./common");
const ResponceConfig = require("./responce-config");

const loadEJS = (filename, req, res, datas) => {
  const filePath = path.join(
    getRootPath(),
    "views",
    "pages",
    `${filename}.ejs`
  );

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      generateResponce(
        new ResponceConfig(
          500,
          req,
          res,
          CONTENT_TYPES[".txt"],
          "Internal server error"
        )
      );
    } else {
      const renderHTML = ejs.render(data, {
        rootPath: getRootPath(),
        ...datas,
      });
      generateResponce(
        new ResponceConfig(200, req, res, CONTENT_TYPES[".html"], renderHTML)
      );
    }
  });
};

module.exports = loadEJS;
