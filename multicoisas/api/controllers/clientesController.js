const { Sequelize, DataTypes } = require('sequelize');
const Clientes = require('../models/clientesModels');

module.exports = {
    async getAllClientes(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
          });
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(clientes);
    },

  
    async createClientes(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Clientes(sequelize, Sequelize.DataTypes).create({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            DataNascimento: req.body.DataNascimento,
            Email: req.body.Email,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            });
        
        res.status(200).send({mensagem: 'Novo Cliente adicionado com sucesso'});
    },

    async updateClientes(req,res){
        const sequelize = new Sequelize('multicoisas', 'root', '17VilelaFernandoDB05', {
            host: 'localhost',
            dialect: 'mysql',
            });

        await Clientes(sequelize, Sequelize.DataTypes).update({
            Codigo: req.body.Codigo,
            Nome: req.body.Nome,
            DataNascimento: req.body.DataNascimento,
            Email: req.body.Email,
            DataCriacao: req.body.DataCriacao,
            DataModificacao: req.body.DataModificacao
            }, {where: {id: req.body.id,
                 }
            });
        res.status(200).send({mensagem: 'Informações de Cliente alteradas com sucesso'});
        
    },
};












