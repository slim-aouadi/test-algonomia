module.exports = (sequelize, Sequelize) => {
    const ProcessFiscal = sequelize.define("ProcessFiscal", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      annee: {
        type: Sequelize.STRING
      },
      trimestre: {
        type: Sequelize.STRING
      },
      dateDeCreation: {
        type: Sequelize.DATEONLY
      }
    });
    return ProcessFiscal;
};