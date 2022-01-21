const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController')
router.get('/', (req,res) => { clientesController.getAllClientes(req,res);});
router.post('/', (req,res) => { clientesController.createClientes(req,res); });
router.put('/:id', (req,res) => { clientesController.updateClientes(req,res); });

module.exports = router;