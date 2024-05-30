const COMMON_OPERATIONS_MESSAGES = Object.freeze({
  ADD_MESSAGE: "Data Added Successfully",
  DELETE_MESSAGE: "Data Deleted Successfully",
  UPTADE_MESSAGE: "Data Updated Successfully",
});

// const HTTP_METHODS = {
//   GET: "GET",
//   POST: "POST",
//   PUT: "PUT",
//   DELETE: "DELETE",
//   PATCH: "PATCH",
//   OPTIONS: "OPTIONS",
// };
const CONTENT_TYPES = Object.freeze({
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
});

const JSON_KEYS = Object.freeze({
  SERVICES: "services",
  ABOUT: "about",
  SKILLS: "skills",
  PORTFOLIO: "portfolio",
  TESTIMONIAL: "testimonial",
  APPLICATION: "application",
});

module.exports = {
  COMMON_OPERATIONS_MESSAGES,
  CONTENT_TYPES,
  JSON_KEYS,
};
