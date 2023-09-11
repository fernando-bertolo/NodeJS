const express = require("express");
const usuarios = require("../../../../database/usuarios/usuarios");
const auth = express();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

auth.post("/login", async (request, response) => { // Utilizamos uma funcão assincrona com async e o await para os metodos que nao devem ser passados para frente enquanto não terminar a execução
  const { usuario, senha } = request.body;
  const user = await usuarios.findOne({ 
    where: {
      usuario: usuario, // valor da esquerda é o valor da tabela no mysql e o da direita o da requisição no insomnia por exemplo
    },
  });

  if (!user) {
    return response.status(401).json({message: "Usuário não encontrado"});
  }

  const validaSenha = await bcrypt.compare(senha, user.senha); // passando o hash da senha que foi criado no createUser.js e comparando com o do banco

  if (!validaSenha) {
    return response.status(401).json({message: "Senha incorreta!"});
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
