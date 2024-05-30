const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult } = require("../utils/result");
const baseService = require("./base-service");
const getAllTestimonial = async () => {
  const datas = await baseService.getAllData(JSON_KEYS.TESTIMONIAL);

  return new SuccessResult(null, datas);
};
/**
 *
 * @param {TESTIMONIAL} model
 * @returns
 */
const insertTestimonial = async (model) => {
  const newReview = await baseService.insertData(JSON_KEYS.TESTIMONIAL, model);

  return new SuccessResult(COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE, newReview);
};

module.exports = {
  getAllTestimonial,
  insertTestimonial,
};
