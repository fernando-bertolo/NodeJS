const express = require("express");
const listaUser = express.Router();

listaUser.get("/list-user", (req, res) => {
  res.send("Usuário listado");
});

module.exports = listaUser;
