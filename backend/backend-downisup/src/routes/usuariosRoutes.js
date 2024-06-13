const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");
const verificarToken = require("../middlewars/authentification");
const { validationResult } = require("express-validator");
const validationDataUser =
  require("../middlewars/validations").validateUserRegistration;

router.get("/perfil", verificarToken, usuarioController.obtenerPerfilUsuario);
router.get("/hijos", verificarToken, usuarioController.obtenerHijos);

router.post("/", validationDataUser, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    await usuarioController.agregarUsuario(req, res);
  } catch (error) {
    next(error);
  }
});
router.post("/login", usuarioController.loginUsuario);

module.exports = router;
