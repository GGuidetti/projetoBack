const {Sequelize} = require('sequelize');


const database = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'root'
});

database.authenticate().then(function(){
    console.log("deu bom cria");
}).catch(function(){
    console.log("deu ruim cria");
});

module.exports = db;