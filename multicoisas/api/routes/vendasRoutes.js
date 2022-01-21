const express = require('express');
const router = express.Router();

const vendasController = require('../controllers/vendasController')
router.get('/', (req,res) => {vendasController.getAllVendas(req,res);});
router.post('/', (req,res) => {vendasController.createVendas(req,res); });
router.put('/:id', (req,res) => {vendasController.updateVendas(req,res); });

module.exports = router;