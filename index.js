require("dotenv").config();

const http = require("http");
const handleRouters = require("./routers/routers");
const { generateResponce } = require("./utils/common");
const ResponceConfig = require("./utils/responce-config");
const { CONTENT_TYPES } = require("./utils/constant");
const { ErrorResult } = require("./utils/result");
const useStaticFiles = require("./middlewares/static-file-middlewares");
const useCors = require("./middlewares/cors-middleware");
const PORT = process.env.PORT || 8000;
const handlerDynamicRouter = (req, res) => {
  if (!handleRouters(req, res)) {
    generateResponce(
      new ResponceConfig(404, req, res, CONTENT_TYPES[".json"]),
      JSON.stringify(new ErrorResult("Not found"))
    );
  }
};

const server = http.createServer((req, res) => {
  useCors(req, res, () => {
    if (res.headersSent) return; 
    useStaticFiles(req, res, () => {
      if (res.headersSent) return; 
      handlerDynamicRouter(req, res);
    });
  });
});
server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
