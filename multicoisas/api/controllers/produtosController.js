const { Sequelize, DataTypes } = require('sequelize');
const Produtos = require('../models/produtosModels');

module.exports = {
    async getAllProdutos(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(produtos);
    },

  
    async createProdutos(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Produtos(sequelize, Sequelize.DataTypes).create({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            Descricao: req.body.Descricao,
            CategoriaID: req.body.CategoriaID,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            });
        
        res.status(200).send({mensagem: 'Produto adicionado com sucesso'});
    },

    async updateProdutos(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
             });

        await Produtos(sequelize, Sequelize.DataTypes).update({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            Descricao: req.body.Descricao,
            CategoriaID: req.body.CategoriaID,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            }, {where: {id: req.body.id,
                }
            });
        res.status(200).send({mensagem: 'Informações de Produto alteradas com sucesso'});
        
    },

    async deleteProdutos(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });
    
        await Produtos(sequelize, Sequelize.DataTypes).destroy({
            where: {
                id: req.body.id,
                }
            });
        
            res.status(200).send({mensagem: 'Produto deletado com sucesso'});
            
    },

};













