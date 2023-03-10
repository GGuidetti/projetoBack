const {Sequelize} = require('sequelize');


const database = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'aluno',
    password: 'mysql',
    database: 'mysql'
});

database.authenticate().then(function(){
    console.log("deu bom cria");
}).catch(function(){
    console.log("deu ruim cria");
});

module.exports = database;