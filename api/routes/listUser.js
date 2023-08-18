const express = require("express");
const ListaUser = express.Router();

ListaUser.get("/list-user", (req, res) => {
  res.send("Usuário listado");
});

module.exports = ListaUser;
