const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`O App esta rodando na porta ${port}`);
});

app.get("/consulta", (req, res) => {
  res.send("Consulta realizada");
});

app.post("/Criar", (req, res) => {});
app.delete("/Delete", (req, res) => {});
