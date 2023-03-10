const Sequelize = require('sequelize');
const db = require('../../banco');

const Pessoa = db.define('pessoa', {
    id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Pessoa.sync({alter: true});
//Pessoa.sync();
module.exports = Pessoa;