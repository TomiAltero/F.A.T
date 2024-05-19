const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');

// Ruta para eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await usuario.destroy();
    console.log('Usuario eliminado:', usuario.toJSON());
    res.json({ usuario, message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar usuario' });
  }
});

module.exports = router;

