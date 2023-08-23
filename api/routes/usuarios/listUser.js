const express = require("express");
const listaUser = express();
const usuarios = require("../../../database/usuarios/usuarios");

// Listando todas as informações
listaUser.get("/list-user", async (req, res) => {
  const listUser = await usuarios.findAll();
  res.send(listUser);
});

module.exports = listaUser;
