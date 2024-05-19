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



router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
  }
});


module.exports = router;

