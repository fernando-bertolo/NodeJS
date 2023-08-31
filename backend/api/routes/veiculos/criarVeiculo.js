const express = require("express");
const criarVeiculo = express();
const veiculos = require("../../../database/veiculos/veiculos");

const { mountpath } = require("../../server");

criarVeiculo.post("/criar-veiculos", async (request, response) => {
  try {
    // Cria uma instancia do modelo com os dados da requisição
    const novoVeiculo = veiculos.build(request.body);

    //Valida os dados
    await novoVeiculo.validate();

    //Se a validação passar cria o veículo no banco
    await novoVeiculo.save();

    response.send("Veículo criado com sucesso");

  } catch (error) {
    console.log(error);
    response.status(400).send(`Erro ao criar veículo ${error.message}`);
  }
});

module.exports = criarVeiculo;
