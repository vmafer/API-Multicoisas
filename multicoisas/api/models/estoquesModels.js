'use strict'
const {Model} = require('sequelize');
const estoques = require('../controllers/estoquesController');
module.exports = (sequelize, DataTypes) => {
    class Estoques extends Model {}

    Estoques.init ({
    ProdutoId: DataTypes.INTEGER,
    Quantidade: DataTypes.INTEGER,
    Preco: DataTypes.DECIMAL,
    DataCriacao: DataTypes.DATE,
    DataModificacao: DataTypes.DATE
    },
    
    {
        sequelize,
        modelName: 'estoques', 
        timestamps: false
    }
    
    );
    return Estoques;
};