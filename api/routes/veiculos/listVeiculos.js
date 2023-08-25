const express = require("express");
const listVeiculos = express();
const dbVeiculos = require("../../../database/veiculos/veiculos");

listVeiculos.get("/list-veiculos", async (req, res) => {
  try {
    const listandoVeiculos = await dbVeiculos.findAll();
    res.send(listandoVeiculos);
  } catch (error) {
    console.log(error);
  }
});

module.exports = listVeiculos;
