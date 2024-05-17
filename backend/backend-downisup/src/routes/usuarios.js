const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');


// Ruta para obtener todos los usuarios


router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Hubo un error al obtener usuarios' });
  }
});

module.exports = router;

