const express = require('express');
const router = express.Router();

const produtosController = require('../controllers/produtosController')
router.get('/', (req,res) => {produtosController.getAllProdutos(req,res);});
router.post('/', (req,res) => { produtosController.createProdutos(req,res); });
router.put('/:id', (req,res) => { produtosController.updateProdutos(req,res); });
router.delete('/:id', (req,res) => { produtosController.deleteProdutos(req,res); });

module.exports = router;