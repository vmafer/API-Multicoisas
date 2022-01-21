const { Sequelize, DataTypes } = require('sequelize');
const Categorias = require('../models/categoriasModels');

module.exports = {
    async createCategorias(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Categorias(sequelize, Sequelize.DataTypes).create({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            });
        
        res.status(200).send({mensagem: 'Categoria adicionada com sucesso'});
    },

    async updateCategorias(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
             });

        await Categorias(sequelize, Sequelize.DataTypes).update({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            }, {where: {id: req.body.id,
                }
            });
        res.status(200).send({mensagem: 'Informações da Categoria alteradas com sucesso'});
        
    },

};









