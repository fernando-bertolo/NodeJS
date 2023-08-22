const express = require("express");

//Import Users
const listaUser = require("./routes/usuarios/listUser");
const createUser = require("./routes/usuarios/createUser");
const updateUser = require("./routes/usuarios/updateUser");
const deleteUser = require("./routes/usuarios/deleteUser");

//Import Veiculos
const createVeiculo = require("./routes/veiculos/createVeiculo");

const app = express();
const port = 3000;
app.listen(port);

//Rotas de Usuário
app.use(listaUser);
app.use(createUser);
app.use(updateUser);
app.use(deleteUser);

//rotas de Veiculos
app.use(createVeiculo);

module.exports = app;
