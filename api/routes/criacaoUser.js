async function CreateUser(app) {
  app.post("/create-user", () => {
    res.send("Usuário criado");
  });
}

module.exports = CreateUser;
