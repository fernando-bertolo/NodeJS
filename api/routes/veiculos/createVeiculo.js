const express = require("express");
const CreateVeiculos = express();
const veiculos = require("../../../database/veiculos/veiculos");
const { mountpath } = require("../../server");

CreateVeiculos.post("/create-veiculos", (request, response) => {
  try {
    veiculos.create(request.body);
    response.send("Veículo criado com sucesso").statusCode(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = CreateVeiculos;
