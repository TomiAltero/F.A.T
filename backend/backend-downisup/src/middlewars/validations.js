const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('username')
    .isString()
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio'),

  body('nombre')
    .isString()
    .notEmpty()
    .withMessage('El nombre es obligatorio'),

  body('apellido')
    .isString()
    .notEmpty()
    .withMessage('El apellido es obligatorio'),

  body('email')
    .isEmail()
    .withMessage('El email es inválido'),

  body('password')
    .isString()
    .isLength({ min: 6, max: 20 })
    .withMessage('La contraseña debe tener entre 6 y 20 caracteres'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateUserRegistration
};

