const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");
const verificarToken = require("../middlewars/authentification");
const { validationResult } = require("express-validator");
const validationDataUser =
  require("../middlewars/validations").validateUserRegistration;

router.post("/login", usuarioController.loginUsuario);
router.get("/perfil", verificarToken, usuarioController.obtenerPerfilUsuario);

router.get("/", verificarToken, usuarioController.obtenerUsuarios);
router.get("/:id", verificarToken, usuarioController.obtenerUsuarioPorId);

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

router.put("/:id", verificarToken, usuarioController.actualizarUsuario);
router.delete("/:id", verificarToken, usuarioController.eliminarUsuario);

router.get("/hijo", verificarToken, usuarioController.obtenerHijos);

router.get(
  "/hijo/:hijoId",
  verificarToken,
  usuarioController.obtenerFrecuenciaCardiacas,
);

router.get(
  "/hijo/:hijoId/presionArterial",
  verificarToken,
  usuarioController.obtenerPresionArterial,
);

router.get(
  "/hijo/:hijoId/temperatura",
  verificarToken,
  usuarioController.obtenerTemperaturas,
);

module.exports = router;
