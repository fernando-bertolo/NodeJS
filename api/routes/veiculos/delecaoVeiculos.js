const express = require("express");
const DelecaoVeiculos = express();
const BancoVeiculos = require("../../../database/veiculos/veiculos");

DelecaoVeiculos.delete("/delecao-Veiculos/:id", (req, res) => {
  try {
    if(req.params.id){
      BancoVeiculos.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("Veiculo deletado com sucesso");
    } else {
      res.send("Veículo não existe");
    }

  } catch (error) {
    res.send("Erro").statusCode(404);
  }
});

module.exports = DelecaoVeiculos;
