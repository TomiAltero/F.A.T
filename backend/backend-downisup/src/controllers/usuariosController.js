const Usuario = require("../models/usuario");
const UsuarioXHijo = require("../models/usuarioXHijo");
const Hijo = require("../models/hijo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FrecuenciaCardiaca = require("../models/frecuenciaCardiaca");
const PresionArterial = require("../models/presionArterial");
const Temperatura = require("../models/temperatura");
const Peso = require("../models/peso");
const upload = require("../config/upload");

class UsuarioController {
  async obtenerUsuarios(req, res) {
    const usuarios = await Usuario.findAll();
    try {
      res.json(usuarios);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Hubo un error al obtener usuarios" });
    }
  }

  async obtenerUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).json({ error: "Hubo un error al obtener el usuario" });
    }
  }

  async agregarUsuario(req, res) {
    try {
      const { username, email, dni, password, nombre, apellido, imagen } =
        req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const nuevoUsuario = await Usuario.create({
        username,
        email,
        dni,
        password: hashedPassword,
        nombre,
        apellido,
        imagen,
      });

      console.log("Usuario creado:", nuevoUsuario.toJSON());
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      res.status(500).json({ error: "Hubo un error al agregar usuario" });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { username, email, password, nombre, apellido } = req.body;

      let usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      usuario.username = username;
      usuario.email = email;
      if (password) {
        usuario.password = await bcrypt.hash(password, 10);
      }
      usuario.nombre = nombre;
      usuario.apellido = apellido;

      await usuario.save();

      console.log("Usuario actualizado:", usuario.toJSON());
      res.json(usuario);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ error: "Hubo un error al actualizar usuario" });
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
        await usuario.destroy();
      }
      console.log("Usuario eliminado:", usuario.toJSON());
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Hubo un error al eliminar usuario" });
    }
  }

  async loginUsuario(req, res) {
    const { username, password } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { username } });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      } else if (!(await bcrypt.compare(password, usuario.password))) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
      }

      const token = jwt.sign({ id: usuario.id }, process.env.TOKEN_SECRET, {
        expiresIn: "3h",
      });

      return res.json({
        message: "Inicio de sesión exitoso",
        token,
        usuario: {
          id: usuario.id,
          username: usuario.username,
          email: usuario.email,
        },
      });
    } catch (error) {
      console.error("Error en el login:", error);
      res.status(500).json({ error: "Hubo un error en el login" });
    }
  }
  async obtenerPerfilUsuario(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hijos = usuario.Hijos.map((hijo) => hijo.toJSON());

      res.json({
        usuario: usuario.toJSON(),
        hijos: hijos,
      });
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener el perfil del usuario" });
    }
  }
  async obtenerHijos(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      const hijos = usuario.Hijos.map((hijo) => hijo.toJSON());

      res.json(hijos);
    } catch (error) {
      console.error("Error al obtener los hijos del usuario:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener los hijos del usuario" });
    }
  }

  async obtenerFrecuenciaCardiacas(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: FrecuenciaCardiaca,
            as: "frecuenciasCardiacas",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const frecuenciaCardiacas = await hijo.frecuenciasCardiacas;

      res.json(frecuenciaCardiacas);
    } catch (error) {
      console.error("Error al obtener las frecuencias cardiacas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las frecuencias cardiacas" });
    }
  }

  async obtenerPresionArterial(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: PresionArterial,
            as: "presionArterial",
          },
        },
      });

      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const hijo = usuario.Hijos[0];

      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }

      const presionesArteriales = await hijo.getPresionArterial();

      res.json(presionesArteriales);
    } catch (error) {
      console.error("Error al obtener las Presiones Arteriales:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las presiones arteriales" });
    }
  }
  async obtenerTemperaturas(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: Temperatura,
            as: "Temperatura",
          },
        },
      });
      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const hijo = usuario.Hijos[0];
      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const temperaturas = await hijo.getTemperatura();
      res.json(temperaturas);
    } catch (error) {
      console.error("Error al obtener las temperaturas:", error);
      res
        .status(500)
        .json({ error: "Hubo un error al obtener las temperaturas" });
    }
  }

  async obtenerPesos(req, res) {
    try {
      const { hijoId } = req.params;
      const usuario = await Usuario.findByPk(req.userId, {
        include: {
          model: Hijo,
          through: UsuarioXHijo,
          as: "Hijos",
          where: { id: hijoId },
          include: {
            model: Peso,
            as: "Peso",
          },
        },
      });
      if (!usuario) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const hijo = usuario.Hijos[0];
      if (!hijo) {
        return res.status(404).json({ error: "Hijo no encontrado" });
      }
      const pesos = await hijo.getPeso();
      res.json(pesos);
    } catch (error) {
      console.error("Error al obtener los pesos:", error);
      res.status(500).json({ error: "Hubo un error al obtener los pesos" });
    }
  }
}

module.exports = new UsuarioController();
