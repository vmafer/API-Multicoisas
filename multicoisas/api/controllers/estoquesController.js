const { Sequelize, DataTypes } = require('sequelize');
const Estoques = require('../models/estoquesModels');

module.exports = {
    async getAllEstoques(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
          });
        const estoques = await Estoques(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(estoques);
    },

  
    async createEstoques(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Estoques(sequelize, Sequelize.DataTypes).create({
            ProdutoId: req.body.ProdutoId,
            Quantidade: req.body.Quantidade,
            Preco: req.body.Preco,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            });
        
        res.status(200).send({mensagem: 'Novo Estoque criado com sucesso'});
    },

    async updateEstoques(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
             });

        await Estoques(sequelize, Sequelize.DataTypes).update({
            ProdutoId: req.body.ProdutoId,
            Quantidade: req.body.Quantidade,
            Preco: req.body.Preco,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            }, {where: {id: req.body.id,
                }
            });
        res.status(200).send({mensagem: 'Informações de Estoque alteradas com sucesso'});
        
    },

};






