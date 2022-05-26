const processusFiscal = require("../controller/processFiscalController");
var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  processusFiscal.createProcessusFiscal(req, res);
});

router.get("/", function (req, res, next) {
  processusFiscal.fetchProcessusFiscauxList(res);
});

router.get("/groupByYear", function (req, res, next) {
  processusFiscal.fetchProcessusFiscauxGroupByYear(res);
});

router.get("/recent", function (req, res, next) {
  processusFiscal.fetchRecentFile(res);
});
module.exports = router;
