const express = require("express");
const DelecaoVeiculos = express();
const BancoVeiculos = require("../../../database/veiculos/veiculos");

DelecaoVeiculos.delete("/DelecaoVeiculos/:id", (req, res) => {
  BancoVeiculos.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Veiculo deletado com sucesso");
});

module.exports = DelecaoVeiculos;
