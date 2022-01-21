const { Sequelize, DataTypes } = require('sequelize');
const Vendas = require('../models/vendasModels');

module.exports = {
    async getAllVendas(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
          });
          const vendas = await Vendas(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(vendas);
    },

  
    async createVendas(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Vendas(sequelize, Sequelize.DataTypes).create({
            Codigo: req.body.Codigo,
            Valor: req.body.Valor,
            DataVenda: req.body.DataVenda,
            ClienteID: req.body.ClienteID,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            });
        
        res.status(200).send({mensagem: 'Venda adicionada com sucesso'});
    },

    async updateVendas(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
             });

        await Vendas(sequelize, Sequelize.DataTypes).update({
            Codigo: req.body.Codigo,
            Valor: req.body.Valor,
            DataVenda: req.body.DataVenda,
            ClienteID: req.body.ClienteID,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            }, {where: {id: req.body.id,
                }
            });
        res.status(200).send({mensagem: 'Informações de venda alteradas com sucesso'});
        
    },

};





