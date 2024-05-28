const { body, validationResult } = require('express-validator');

class Validator {
  constructor(field) {
    this.field = field;
    this.validators = [body(field).isString().notEmpty().withMessage(`${field} es obligatorio`)];
  }

  isLength(min, max) {
    this.validators.push(body(this.field).isLength({ min, max }).withMessage(`${this.field} debe tener entre ${min} y ${max} caracteres`));
    return this;
  }

  matches(regex, message) {
    this.validators.push(body(this.field).matches(regex).withMessage(message));
    return this;
  }

  custom(validationFn, message) {
    this.validators.push(body(this.field).custom(validationFn).withMessage(message));
    return this;
  }

  addValidator(validator) {
    this.validators.push(validator);
    return this;
  }

  static validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }

  getValidators() {
    return this.validators;
  }
}

const validateUserRegistration = [
  ...new Validator('username')
    .isLength(3, 20, 'El nombre de usuario debe tener entre 3 y 20 caracteres')
    .matches(/^[A-Za-z0-9_]+$/, 'El nombre de usuario solo puede contener letras, números y guiones bajos')
    .getValidators(),

  ...new Validator('nombre')
    .isLength(2, 20, 'El nombre debe tener entre 2 y 20 caracteres')
    .matches(/^[A-Za-z]+$/, 'El nombre solo puede contener letras')
    .custom(value => value.charAt(0) === value.charAt(0).toUpperCase(), 'La primera letra del nombre debe ser mayúscula')
    .getValidators(),

  ...new Validator('apellido')
    .isLength(2, 20, 'El apellido debe tener entre 2 y 20 caracteres')
    .matches(/^[A-Za-z]+$/, 'El apellido solo puede contener letras')
    .custom(value => value.charAt(0) === value.charAt(0).toUpperCase(), 'La primera letra del apellido debe ser mayúscula')
    .getValidators(),

  ...new Validator('email')
    .addValidator(body('email').isEmail().withMessage('El email es inválido').normalizeEmail())
    .getValidators(),

  ...new Validator('password')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
    .matches(/[@$!%*?&#]/, 'La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &, #)')
    .getValidators(),

  Validator.validate
];

module.exports = {
  validateUserRegistration
};









