// const cloudinary = require("./cloudinary");

// async function saveCloudinary(file) {

//   if (file) {
//     const result = await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_chunked(file.filepath, (err, result) => {
//         if (err) {
//           console.error("Error:", err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });

//     return result.url;
//   }
// }

// module.exports = saveCloudinary;
const cloudinary = require("./cloudinary");

async function saveCloudinary(file, folder = null) {
  if (file) {
    const options = {};
    if (folder) {
      options.folder = folder;
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_chunked(
        file.filepath,
        options,
        (err, result) => {
          if (err) {
            console.error("Error:", err);
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    return result.url;
  }
}

module.exports = saveCloudinary;
