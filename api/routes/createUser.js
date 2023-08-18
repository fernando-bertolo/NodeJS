const express = require("express");
const CreateUser = express.Router();

CreateUser.post("/create-user", (req, res) => {
  res.send("Usuário criado");
});

module.exports = CreateUser;
