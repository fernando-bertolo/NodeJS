const Sequelize = require("sequelize");
const database = require("./db");

const veiculos = database.define("Veiculos", {
  Marca: Sequelize.STRING,
  Modelo: Sequelize.STRING,
  Ano: Sequelize.INTEGER,
  Combustivel: Sequelize.STRING,
});

module.exports = veiculos;
