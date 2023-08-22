const express = require("express");
const CreateVeiculos = express();
const veiculos = require("../../../database/veiculos");
const { mountpath } = require("../../server");

CreateVeiculos.post("/create-veiculos", (request, response) => {
  veiculos.create({
    Marca: "Chevrolet",
    Modelo: "Zafira",
    Ano: 2005,
    Combustivel: "Flex",
  });
  response.send("Veículo criado com sucesso").statusCode(200);
});

module.exports = CreateVeiculos;
