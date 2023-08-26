const express = require("express");
const alteraVeiculos = express();
const dbVeiculos = require("../../../database/veiculos/veiculos");

alteraVeiculos.put("/altera-veiculos/:id", (req,res) => {
    dbVeiculos.update(
        {
            Marca: req.body.Marca,
            Modelo: req.body.Modelo,
            Versao: req.body.Versao,
            Ano: req.body.Ano,
            Combustivel: req.body.Combustivel,
            Cor: req.body.Cor,
            Quilometragem: req.body.Quilometragem,
            Valor: req.body.Valor
        },
        {where: {id: req.params.id}}
    );
    res.send("Veículo alterado com sucesso!").json();
});

module.exports = alteraVeiculos;