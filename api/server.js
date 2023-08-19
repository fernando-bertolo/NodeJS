const express = require("express");
const listaUser = require("./routes/listUser");
const createUser = require("./routes/createUser");
const updateUser = require("./routes/updateUser");
const deleteUser = require("./routes/deleteUser");


const app = express();
const port = 3000;
app.listen(port);

//Rotas de Usuário
app.use(listaUser);
app.use(createUser);
app.use(updateUser);
app.use(deleteUser);

module.exports = app;
