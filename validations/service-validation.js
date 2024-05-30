const Service = require("../models/servicesModel");
const { ErrorResult, SuccessResult } = require("../utils/result");
const { checkNotNull } = require("./common-validations");

const validationService = (service) => {
  const validationResult = validationHelper(
    checkNameNotNull(service),
    checkImageNotNull(service),
    checkDescNotNull(service)
  );
  return validationResult;
};
/**
 *
 * @param {Service} service
 */
const checkNameNotNull = (service) => {
  if (service.name === "") return new ErrorResult(`name can not be empty!`);

  return new SuccessResult();
};
const checkDescNotNull = (service) => {
  if (service.description === "")
    return new ErrorResult(` description can not be empty!`);

  return new SuccessResult();
};
const checkImageNotNull = (service) => {
  if (service.image.url === "")
    return new ErrorResult(` image can not be empty!`);

  return new SuccessResult();
};

const validationHelper = (...results) => {
  for (const result of results) {
    if (!result.success) return result;
  }
  return new SuccessResult();
};

module.exports = validationService;
