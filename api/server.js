const express = require("express");
const ListaUser = require("./routes/listUser");
const CreateUser = require("./routes/createUser");

const app = express();
const port = 3000;
app.listen(port);

//Rotas de Usuário
app.use(ListaUser);
app.use(CreateUser);

module.exports = app;
