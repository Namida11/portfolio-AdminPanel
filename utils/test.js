const formidable = require("formidable");

const parseFormData = (req) => {
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

module.exports = {
  parseFormData,
};
