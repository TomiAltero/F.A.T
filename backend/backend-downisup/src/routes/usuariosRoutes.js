const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const usuarioController = require('../controllers/usuariosController');

// Ruta para obtener todos los usuarios


router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuarioPorId);
router.post('/', usuarioController.agregarUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
