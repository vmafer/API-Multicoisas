'use strict'
const {Model} = require('sequelize');
const categorias = require('../controllers/categoriasController');
module.exports = (sequelize, DataTypes) => {
    
    class Categorias extends Model {}
    Categorias.init ({
    Codigo: DataTypes.INTEGER,
    Nome: DataTypes.STRING,
    DataCriacao: DataTypes.DATE,
    DataModificacao: DataTypes.DATE
    },
    
    {
        sequelize,
        modelName: 'categorias', 
        timestamps: false
    }
    
    );
    return Categorias;
};