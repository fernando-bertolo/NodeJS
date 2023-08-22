const express = require("express");
const updateUser = express.Router();

updateUser.put("/update-user", (req, res) => {
  res.send("Usuário alterado");
});

module.exports = updateUser;
