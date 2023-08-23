const Sequelize = require("sequelize");
const database = require("../db");

const veiculos = database.define("Veiculos", {
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
