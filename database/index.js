(async () => {

    const database = require('./db');
    const usuarios = require('./user');
    const veiculos = require('./veiculos');
    await database.sync();
})();