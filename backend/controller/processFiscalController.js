const db = require("../models");
const processFiscalService = require("../service/processFiscalService");

exports.fetchProcessusFiscauxList = async (res) => {
  try {
    const result = await processFiscalService.fetchProcessusFiscauxList();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving the Event list.",
    });
  }
};

exports.createProcessusFiscal = async (req, res) => {
  try {
    const processusFiscal = req.body;
    const result = await processFiscalService.createProcessusFiscal(
      processusFiscal
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Event.",
    });
  }
};

exports.fetchProcessusFiscauxGroupByYear = async (res) => {
  try {
    const result =
      await processFiscalService.fetchProcessusFiscauxGroupByYear();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving the Event list.",
    });
  }
};

exports.fetchRecentFile = async (res) => {
  try {
    const result = await processFiscalService.fetchRecentFile();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving the Event list.",
    });
  }
};
