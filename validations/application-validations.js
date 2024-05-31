const Application = require("../models/applicationModel");
const { ErrorResult, SuccessResult } = require("../utils/result");
const { checkNotNull } = require("./common-validations");

const validationApplication = (application) => {
  const validationResult = validationHelper(
    checkNameNotNull(application),
    checkEmailNotNull(application),
    checkSubjectNotNull(application),
    checkMessageNotNull(application)
  );
  return validationResult;
};

/**
 * @param {Application} application
 */
const checkNameNotNull = (application) => {
  if (!application.name) return new ErrorResult("Name cannot be empty!");
  return new SuccessResult();
};

/**
 * @param {Application} application
 */
const checkEmailNotNull = (application) => {
  if (!application.email) return new ErrorResult("Email cannot be empty!");
  return new SuccessResult();
};

/**
 * @param {Application} application
 */
const checkSubjectNotNull = (application) => {
  if (!application.subject) return new ErrorResult("Subject cannot be empty!");
  return new SuccessResult();
};

/**
 * @param {Application} application
 */
const checkMessageNotNull = (application) => {
  if (!application.message) return new ErrorResult("Message cannot be empty!");
  return new SuccessResult();
};

const validationHelper = (...results) => {
  for (const result of results) {
    if (!result.success) return result;
  }
  return new SuccessResult();
};

module.exports = validationApplication;
