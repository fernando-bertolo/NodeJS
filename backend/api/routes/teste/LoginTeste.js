const express = require("express");
const teste = express();

const users = [{
    id: "1",
    usuario: "fernando.bertolo",
    password: "123"
}];


teste.post("/login-teste", (req, res) => {
    const {usuario, password} = req.body;

    const user = users.find( user => user.usuario === usuario && user.password === password);
});

module.exports = teste; 