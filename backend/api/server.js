const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
app.listen(port);

//Import Users
const listaUser = require("./routes/usuarios/listUser");
const createUser = require("./routes/usuarios/createUser");
const updateUser = require("./routes/usuarios/updateUser");
const deleteUser = require("./routes/usuarios/deleteUser");
const testeUser = require("./routes/teste/LoginTeste");

//Import Autenticação
const autenticacao = require("./routes/usuarios/autenticacao/auth");

//Import Veiculos
const criarVeiculo = require("./routes/veiculos/criarVeiculo");
const listVeiculo = require("./routes/veiculos/listVeiculos");
const delecaoVeiculos = require("./routes/veiculos/delecaoVeiculos");
const alteraVeiculos = require("./routes/veiculos/alterarVeiculo");
const teste = require("./routes/teste/LoginTeste");

//Rotas de Usuário
app.use(listaUser);
app.use(createUser);
app.use(updateUser);
app.use(deleteUser);
app.use(testeUser);

//Rotas de Autenticação
app.use(autenticacao);

//rotas de Veiculos
app.use(criarVeiculo);
app.use(listVeiculo);
app.use(delecaoVeiculos);
app.use(alteraVeiculos);

module.exports = app;
