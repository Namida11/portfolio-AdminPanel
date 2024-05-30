const path = require("path");
const fs = require("fs");
const { CONTENT_TYPES } = require("../utils/constant");
const getRootPath = require("../utils/root-path");
const { generateResponce } = require("../utils/common");
const ResponceConfig = require("../utils/responce-config");

function useStaticFiles(req, res, next) {
  const filePath = path.join(getRootPath(), "public", req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      next();
    } else {
      const extname = path.extname(filePath);
      generateResponce(
        new ResponceConfig(
          200,
          req,
          res,
          CONTENT_TYPES[extname] || "application/octet-stream",
          content
        )
      );
    }
  });
}

module.exports = useStaticFiles;
