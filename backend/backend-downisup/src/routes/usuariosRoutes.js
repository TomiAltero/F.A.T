const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');
const { validateUserRegistration } = require('../middlewars/validations');
const authenticateToken = require('../middlewars/authentification');

router.get('/', authenticateToken, usuarioController.obtenerUsuarios);
router.get('/:id', authenticateToken, usuarioController.obtenerUsuarioPorId);
router.post('/', validateUserRegistration, usuarioController.agregarUsuario);
router.put('/:id', authenticateToken, usuarioController.actualizarUsuario);
router.delete('/:id', authenticateToken, usuarioController.eliminarUsuario);

router.post('/login', authenticateToken, usuarioController.loginUsuario);

module.exports = router;

