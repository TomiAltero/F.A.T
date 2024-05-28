const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('username')
    .isString()
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio')
    .isLength({ min: 3, max: 20 })
    .withMessage('El nombre de usuario debe tener entre 3 y 20 caracteres')
    .matches(/^[A-Za-z0-9_]+$/)
    .withMessage('El nombre de usuario solo puede contener letras, números y guiones bajos'),

  body('nombre')
    .isString()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 20 })
    .withMessage('El nombre debe tener entre 2 y 20 caracteres')
    .matches(/^[A-Za-z]+$/)
    .withMessage('El nombre solo puede contener letras')
    .custom(value => {
      if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
        throw new Error('La primera letra del nombre debe ser mayúscula');
      }
      return true;
    }),

  body('apellido')
    .isString()
    .notEmpty()
    .withMessage('El apellido es obligatorio')
    .isLength({ min: 2, max: 20 })
    .withMessage('El apellido debe tener entre 2 y 20 caracteres')
    .matches(/^[A-Za-z]+$/)
    .withMessage('El apellido solo puede contener letras')
    .custom(value => {
      if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
        throw new Error('La primera letra del apellido debe ser mayúscula');
      }
      return true;
    }),

  body('email')
    .isEmail()
    .withMessage('El email es inválido')
    .normalizeEmail(),

  body('password')
    .isString()
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 6, max: 20 })
    .withMessage('La contraseña debe tener entre 6 y 20 caracteres')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una letra minúscula')
    .matches(/[0-9]/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[@$!%*?&#]/)
    .withMessage('La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &, #)'),

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

