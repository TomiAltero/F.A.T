const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('username')
    .isString()
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio')
    .custom(async (value) => {
      const existingUser = await Usuario.findOne({ where: { username: value } });
      if (existingUser) {
        throw new Error('El nombre de usuario ya está en uso');
      }
    }),


  body('nombre')
    .isString()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 50 })
    .withMessage('El nombre debe tener entre 2 y 50 caracteres')
    .custom((value) => {
      if (/\d/.test(value)) {
        throw new Error('El nombre no puede contener números');
      }
      return true;
    })
    .matches(/^[A-Z][a-zA-Z]*$/)
    .withMessage('El nombre debe comenzar con una letra mayúscula')
    .custom((value) => {
      if (/[^a-zA-Z\s]/.test(value)) {
        throw new Error('El nombre no puede contener caracteres especiales');
      }
      return true;
    }),


  body('apellido')
    .isString()
    .notEmpty()
    .withMessage('El apellido es obligatorio')
    .isLength({ min: 2, max: 50 })
    .withMessage('El apellido debe tener entre 2 y 50 caracteres')
    .matches(/^[A-Z][a-zA-Z\s'-]*$/)
    .withMessage('El apellido debe comenzar con una letra mayúscula y solo puede contener letras, espacios, guiones y apóstrofes')
    .custom((value) => {
      if (/\s{2,}/.test(value)) {
        throw new Error('El apellido no puede contener múltiples espacios en blanco consecutivos');
      }
      return true;
    }),


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

