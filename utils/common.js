const ResponceConfig = require("./responce-config");
const formidable = require("formidable");

const generateId = (datas) => {
  if (datas.length === 0) return 1;

  const ids = datas.map((data) => data.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
};

/**
 *
 * @param {ResponceConfig} config
 */
const generateResponce = (config) => {
  config.responce.writeHead(config.status, config.contentType);
  config.responce.end(config.data);
};

const parseRequestBody = (req) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  return new Promise((resolve, reject) => {
    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const parseFormData = (req) => {
  console.log(req);
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads"; // Yüklenen dosyaların saklanacağı klasör
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Form parsing error:", err);
        reject("An error occurred while parsing the form data.");
        return;
      }

      resolve({ fields, files });
    });
  });
};

// const parseFormData = (req) => {
//   return new Promise((resolve, reject) => {
//     const form = new formidable.IncomingForm();

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       // fields içinde form verileri, files içinde yüklenen dosyalar bulunur
//       resolve({ fields, files });
//     });
//   });
// };
module.exports = {
  generateId,
  generateResponce,
  parseRequestBody,
  parseFormData,
};
