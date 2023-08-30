const express = require("express");
const usuarios = require("../../../../database/usuarios/usuarios");
const auth = express();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

auth.post("/login", async (request, response) => {
  const { usuario, senha } = request.body;
  const user = await usuarios.findOne({
    where: {
      usuario: usuario,
    },
  });

  if (!user) {
    return response.send("Usuário não encontrado");
  }

  const validaSenha = await bcrypt.compare(senha, user.senha);

  if (!validaSenha) {
    return response.send("Senha incorreta");
  }

  const token = jwt.sign({ id: usuarios.id }, "your_jwt_secret", {
    expiresIn: "1hr",
  });

  response.send({
    auth: true,
    token: token,
  });
});

module.exports = auth;
