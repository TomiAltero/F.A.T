const { body, validationResult } = require('express-validator');


const validateUserRegistration = [
  body('username').isString().isLength({ min: 8, max: 20 }).withMessage('El nombre de usuario debe tener entre 8 y 20 caracteres'),
  body('email').isEmail().withMessage('El email es inválido'),
  body('password').isString().isLength({ min: 6, max: 20 }).withMessage('La contraseña debe tener entre 6 y 20 caracteres'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return res.json({ message: 'Datos válidos' });
    }
  }
];


module.exports = {
  validateUserRegistration
}

