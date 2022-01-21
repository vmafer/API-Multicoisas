'use strict'
const {Model} = require('sequelize');
const vendas = require('../controllers/vendasController');
module.exports = (sequelize, DataTypes) => {
    class Vendas extends Model {}

    Vendas.init ({
    Codigo: DataTypes.INTEGER,
    Valor: DataTypes.STRING,
    DataVenda: DataTypes.DATE,
    ClienteID: DataTypes.INTEGER,
    DataCriacao: DataTypes.DATE,
    DataModificacao: DataTypes.DATE
    },
    
    {
        sequelize,
        modelName: 'vendas',
        timestamps: false
    }
    
    );
    return Vendas;
};