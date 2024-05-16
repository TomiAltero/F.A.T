const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');


// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); // Utiliza el modelo de Usuario para realizar la consulta
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Hubo un error al obtener usuarios' });
  }
});

// Otras rutas relacionadas con los usuarios...

module.exports = router;

