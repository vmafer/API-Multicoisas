const express = require('express');
const router = express.Router();

const estoquesController = require('../controllers/estoquesController')
router.get('/', (req,res) => {estoquesController.getAllEstoques(req,res);});
router.post('/', (req,res) => {estoquesController.createEstoques(req,res); });
router.put('/:id', (req,res) => {estoquesController.updateEstoques(req,res); });

module.exports = router;