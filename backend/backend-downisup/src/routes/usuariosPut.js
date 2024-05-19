const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;

    // Buscar el usuario por su ID
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (nombre) usuario.nombre = nombre;
    if (email) usuario.email = email;

    await usuario.save();
    console.log('Usuario actualizado:', usuario.toJSON());

    // Enviar la respuesta con el usuario actualizado
    res.json({ usuario, message: 'Usuario actualizado correctamente' });

  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar usuario' });
  }
});

module.exports = router;

