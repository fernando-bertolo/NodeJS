const Sequelize = require("sequelize");
const database = require("./db");

const veiculos = database.define("Veiculos", {
    Marca: "Chevrolet",
    Modelo: "Corsa",
    Ano: "2008",
    Combustivel: "Flex",
});

module.exports = veiculos;