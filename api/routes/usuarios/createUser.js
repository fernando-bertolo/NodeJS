const express = require("express");
const createUser = express();
const usuarios = require("../../../database/usuarios/usuarios");

createUser.post("/create-user", (request, response) => {
  try {
    usuarios.create(request.body);
    response.send("Usuário criado com sucesso");
  } catch (error) {
    console.log(error);
  }
});

module.exports = createUser;
