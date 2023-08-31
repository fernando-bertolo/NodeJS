const express = require("express");
const listaUser = express();
const usuarios = require("../../../database/usuarios/usuarios");

// Listando todas as informações
listaUser.get("/list-user", async (req, res) => {
  try {
    const listUser = await usuarios.findAll();
    res.send(listUser);
  } catch (error) {
    console.log(error);
  }

});

//Listando informações específicas
listaUser.get("/list-user/:id", async (req, res) => {
  try {
    const listUserUnique =  await usuarios.findByPk(req.params.id);
    if(listUserUnique){
      res.send(listUserUnique);
    } else {
      res.send("Usuario não existe");
    }
  } catch (error) {
    res.send("Erro").statusCode(404);
  }

});

module.exports = listaUser;
