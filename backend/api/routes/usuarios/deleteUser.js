const express = require("express");
const { request } = require("./createUser");
const deleteUser = express.Router();
const usuarios = require("../../../database/usuarios/usuarios");

//Deletando usuários específicos através do UUID
deleteUser.delete("/delete-user/:id", (req, res) => {
  try {
    if (req.params.id) {
      usuarios.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("Usuário deletado com sucesso").statusCode(202);
    } else {
      res.send("Usuário não é valido").statusCode(404);
    }
  } catch (error) {}
});

module.exports = deleteUser;
