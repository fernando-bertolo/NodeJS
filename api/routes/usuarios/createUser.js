const express = require("express");
const createUser = express();
const usuarios = require("../../../database/usuarios/usuarios");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

createUser.post("/create-user", (request, response) => {
  try {
    const hash = bcrypt.hashSync(request.body.senha, saltRounds)

    //Objeto user com  a senha hasheada
    const user = {
      ...request.body,
      senha: hash
    }
    usuarios.create(user);
    response.send("Usuário criado com sucesso");
  } catch (error) {
    console.log(error);
  }
});

module.exports = createUser;
