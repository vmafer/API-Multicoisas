'use strict'
const {Model} = require('sequelize');
const clientes = require('../controllers/clientesController');
module.exports = (sequelize, DataTypes) => {
    class Clientes extends Model {}

    Clientes.init ({
    Codigo: DataTypes.INTEGER,
    Nome: DataTypes.STRING,
    DataNascimento: DataTypes.DATE,
    Email: DataTypes.STRING,
    DataCriacao: DataTypes.DATE,
    DataModificacao: DataTypes.DATE

    },
    
    {
        sequelize,
        modelName: 'clientes', 
        timestamps: false
    }
    
    );
    return Clientes;
};