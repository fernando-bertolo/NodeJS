(async () => {
  const database = require("./db");
  const usuarios = require("./usuarios/usuarios");
  const veiculos = require("./veiculos/veiculos");
  await database.sync();
})();
