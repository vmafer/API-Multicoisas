'use strict'
const {Model} = require('sequelize');
const produtos = require('../controllers/produtosController');
module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model {}

    Produtos.init ({
    Codigo: DataTypes.INTEGER,
    Nome: DataTypes.STRING,
    Descricao: DataTypes.STRING,
    CategoriaID: DataTypes.INTEGER,
    DataCriacao: DataTypes.DATE,
    DataModificacao: DataTypes.DATE

    },
    
    {
        sequelize,
        modelName: 'produtos',
        timestamps: false
    }
    
    );
    return Produtos;
};