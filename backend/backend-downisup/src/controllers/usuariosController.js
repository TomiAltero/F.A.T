const Usuario = require('../models/usuarios');

async function agregarUsuario(datosUsuario) {
  try {
    const nuevoUsuario = await Usuario.create(datosUsuario);
    console.log('Usuario creado:', nuevoUsuario.toJSON());
    return nuevoUsuario;
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    throw error;
  }
}

module.exports = {
  agregarUsuario
};

