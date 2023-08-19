const Sequelize = require("sequelize");
const sequelize = new Sequelize('databasecar', 'root', 'Fern@ndo123', {
    dialect: 'mysql', // o banco que vai utilizar e o sequelize traduzir o js
    host: 'localhost', // host é onde esta o banco
    port: 3306, // porta do banco
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log(`Falha ao se conectar: ${erro}`);
});
module.exports = sequelize;