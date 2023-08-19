const express = require("express");
const createUser = express.Router();

createUser.post("/create-user", (req, res) => {
  res.send("Usuário criado");
});

module.exports = createUser;
