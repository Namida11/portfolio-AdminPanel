const baseService = require("./base-service");
const { JSON_KEYS, COMMON_OPERATIONS_MESSAGES } = require("../utils/constant");
const { SuccessResult, ErrorResult } = require("../utils/result");

const Portfolio = require("../models/portfolioModel");

const getAllPortfolioes = async () => {
  const datas = await baseService.getAllData(JSON_KEYS.PORTFOLIO);
  return new SuccessResult(null, datas);
};

/**
 *
 * @param {Portfolio} model
 * @returns
 */

const insertPortfolio = async (model) => {
  const newPortfolio = await baseService.insertData(JSON_KEYS.PORTFOLIO, model);
  return new SuccessResult(
    COMMON_OPERATIONS_MESSAGES.ADD_MESSAGE,
    newPortfolio
  );
};

module.exports = {
  getAllPortfolioes,
  insertPortfolio,
};
