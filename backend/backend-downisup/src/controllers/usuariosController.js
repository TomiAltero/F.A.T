const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const { encryptData, decryptData } = require('../helpers/encryption');

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Hubo un error al obtener usuarios' });
  }
};

exports.obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
  }
};

exports.agregarUsuario = async (req, res) => {
  try {
    const { username, email, password, nombre, apellido } = req.body;

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      username,
      email,
      password: hashedPassword,
      nombre,
      apellido
    });

    console.log('Usuario creado:', nuevoUsuario.toJSON());
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al agregar usuario' });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, nombre, apellido } = req.body;

    let usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    usuario.username = username;
    usuario.email = email;
    if (password) {
      usuario.password = await bcrypt.hash(password, 10);
    }
    usuario.nombre = nombre;
    usuario.apellido = apellido;

    await usuario.save();

    console.log('Usuario actualizado:', usuario.toJSON());
    res.json(usuario);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar usuario' });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    console.log('Usuario eliminado:', usuario.toJSON());
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar usuario' });
  }
};

