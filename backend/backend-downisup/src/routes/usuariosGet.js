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

router.post('/', async (req, res) => {
  try {
    const { nombre, email } = req.body;

    const nuevoUsuario = await Usuario.create({ nombre, email });

    console.log('Usuario creado:', nuevoUsuario.toJSON());

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al agregar usuario' });
  }
});
module.exports = router;

