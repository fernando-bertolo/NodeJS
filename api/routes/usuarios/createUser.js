const express = require("express");
const createUser = express();
const usuarios = require("../../../database/user");

createUser.post("/create-user", (request, response) => {
  usuarios.create({
    nome: "Fernando",
  });
  response.send("Usuário criado com sucesso").statusCode(200);
});

module.exports = createUser;
