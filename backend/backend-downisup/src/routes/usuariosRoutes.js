const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');
const verificarToken = require('../middlewars/authentification');

router.post('/login', usuarioController.loginUsuario);
router.get('/perfil', verificarToken, usuarioController.obtenerPerfilUsuario);

router.get('/', verificarToken, usuarioController.obtenerUsuarios);
router.get('/:id', verificarToken, usuarioController.obtenerUsuarioPorId);
router.post('/', usuarioController.agregarUsuario);
router.put('/:id', verificarToken, usuarioController.actualizarUsuario);
router.delete('/:id', verificarToken, usuarioController.eliminarUsuario);

module.exports = router;

