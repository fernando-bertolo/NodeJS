const express = require("express");
const listVeiculos = express();
const dbVeiculos = require("../../../database/veiculos/veiculos");


//Listando todos os veículos
listVeiculos.get("/list-veiculos", async (req, res) => {
  try {
    const listandoVeiculos = await dbVeiculos.findAll();
    res.send(listandoVeiculos);
  } catch (error) {
    console.log(error);
  }
});

//Listando veículos específicos
listVeiculos.get("/list-veiculos/:id", async (req,res) => {
  try {
    if(req.params.id){
      const listaVeiculosUnicos = await dbVeiculos.findByPk(req.params.id);
      res.send(listaVeiculosUnicos);
    } else {
      res.send("Veículo não existe");
    }
  } catch (error) {
    res.send("Erro interno").statusCode(404);
  }
});

module.exports = listVeiculos;
