const express = require("express");
const createUser = express();
const usuarios = require("../../../database/usuarios/usuarios");
const { Sequelize } = require("sequelize");

createUser.post("/create-user", (request, response) => {
  try {

    if(request.body.id){
      usuarios.create(request.body);
      response.send("Usuário criado com sucesso");
    } else {
      res.send("Digite um valor válido");
    }

  } catch (error) {
    console.log(error);
  }
});

module.exports = createUser;
