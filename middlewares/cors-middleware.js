const { generateResponse } = require("../utils/common");
const ResponceConfig = require("../utils/responce-config");
const { CONTENT_TYPES } = require("../utils/constant");

function useCors(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    generateResponse(
      new ResponceConfig(200, req, res, CONTENT_TYPES[".json"], "")
    );
    return;
  }
  next();
}

module.exports = useCors;
