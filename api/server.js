const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;
const CreateUser = require("./routes/criacaoUser");

app.register(CreateUser);

app.listen(port, () => {
  console.log(`O App esta rodando na porta ${port}`);
});

module.exports = app;
