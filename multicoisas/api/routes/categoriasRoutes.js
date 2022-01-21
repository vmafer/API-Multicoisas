const express = require('express');
const router = express.Router();

const categoriasController = require('../controllers/categoriasController')
router.post('/', (req,res) => { categoriasController.createCategorias(req,res); });
router.put('/:id', (req,res) => { categoriasController.updateCategorias(req,res); });


module.exports = router;