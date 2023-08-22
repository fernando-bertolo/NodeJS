const express = require("express");
const deleteUser = express.Router();

deleteUser.delete("/delete-user", (req,res) => {
    res.send("Usuário deletado");
});

module.exports = deleteUser;