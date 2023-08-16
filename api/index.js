const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.listen(port, () => {
  console.log(`O App esta rodando na porta ${port}`);
});

app.get("/consulta", (req, res) => {
  res.send("Consulta realizada");
  res.status(200);
  console.log("Consulta realizada");
});

app.post("/Criar", (req, res) => {
  res.send("Criação realizada");
  console.log("Criação realizada");
});
app.delete("/Delete", (req, res) => {
  res.send("Deleção realizada");
  console.log("Deleção realizada");
});


module.exports = app;