const Sequelize = require("sequelize");
const database = require("../db");

const veiculos = database.define("Veiculos", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  Marca: Sequelize.STRING,
  Modelo: Sequelize.STRING,
  Versao: Sequelize.STRING,
  Ano: Sequelize.INTEGER,
  Combustivel: Sequelize.STRING,
  Cor: Sequelize.STRING,
  Quilometragem: Sequelize.STRING,
  Valor: Sequelize.DOUBLE,
});

module.exports = veiculos;
