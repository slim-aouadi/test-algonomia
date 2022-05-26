const db = require("../models");
const ProcessFiscal = db.processfiscaux;

exports.fetchProcessusFiscauxList = async () => {
  const [results, metadata] = await db.sequelize.query(
    'select * from "ProcessFiscals" order by "dateDeCreation"'
  );
  return results;
};
exports.createProcessusFiscal = async (data) => {
  const result = await ProcessFiscal.create(data);
  return result;
};
exports.fetchProcessusFiscauxGroupByYear = async (data) => {
  const [results, metadata] = await db.sequelize.query(
    'select count(*) as nbr,annee from "ProcessFiscals" group by "annee"'
  );
  return results;
};

exports.fetchRecentFile = async (data) => {
  var fileInput = [
    "ppr_2022_T1_1652857921_euro.csv",
    "ppr_2022_T2_1652867923_euro.csv",
    "ppr_2022_T2_1652867925_euro.csv",
    "act_2020_T1_1652867924_euro.csv",
    "act_2021_T1_1652867926_euro.csv",
  ];

  transformed = fileInput.map((file) => {
    return {
      name: file,
      origin: file.split("_")[0],
      type: file.split("_")[4].split(".")[0],
      year: parseInt(file.split("_")[1]),
      trimestre: parseInt(file.split("_")[2].split("T")[1]),
      timestamp: parseInt(file.split("_")[3]),
    };
  });

  const uniqueGroupes = transformed.filter(
    (a, i) => transformed.findIndex((s) => a.origin === s.origin) === i
  );
  const result = uniqueGroupes.map((el) => {
    return transformed
      .map((file) => {
        if (file.origin === el.origin && file.type === el.type) {
          return file
        }
      }).filter(Boolean);
  });

  result.map((file) => {
    return file.sort((fileA, fileB) => {
      return (
        fileB.year - fileA.year ||
        fileB.trimestre - fileA.trimestre ||
        fileB.timestamp - fileA.timestamp
      );
    });
  });

  recentFiles = result.map((element) => {
    return element[0];
  });

  return recentFiles;
};
