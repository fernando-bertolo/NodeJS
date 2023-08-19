(async () => {

    const database = require('./db');
    const usuario = require('./user');
    await database.sync();
})();