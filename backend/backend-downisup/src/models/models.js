const mongoose = require('mongoose');

// Definir los esquemas de las entidades
const tipoUsuarioSchema = new mongoose.Schema({
  idTipoUsuario: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  descripcion: { type: String },
});

const generoSchema = new mongoose.Schema({
  idGenero: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
});

const especialidadSchema = new mongoose.Schema({
  idEspecialidad: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
});

const usuarioSchema = new mongoose.Schema({
  idUsuario: { type: Number, required: true, unique: true },
  idTipoUsuario: { type: Number, required: true, ref: 'TipoUsuario' },
  idGenero: { type: Number, required: true, ref: 'Genero' },
  idEspecialidad: { type: Number, required: true, ref: 'Especialidad' },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String },
  direccion: { type: String },
  password: { type: String, required: true },
  dni: { type: Number, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
});

const turnoSchema = new mongoose.Schema({
  idTurno: { type: Number, required: true, unique: true },
  idUsuario: { type: Number, required: true, ref: 'Usuario' },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  motivo: { type: String },
});

const consultaSchema = new mongoose.Schema({
  idConsulta: { type: Number, required: true, unique: true },
  idUsuario: { type: Number, required: true, ref: 'Usuario' },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  motivo: { type: String },
  diagnostico: { type: String },
  tratamiento: { type: String },
});

const historialClinicaSchema = new mongoose.Schema({
  idHistoriaClinica: { type: Number, required: true, unique: true },
  idUsuario: { type: Number, required: true, ref: 'Usuario' },
  antecedentes: { type: String },
  alergias: { type: String },
  medicamentos: { type: String },
  enfermedades: { type: String },
});

// Crear los modelos a partir de los esquemas
const TipoUsuario = mongoose.model('TipoUsuario', tipoUsuarioSchema);
const Genero = mongoose.model('Genero', generoSchema);
const Especialidad = mongoose.model('Especialidad', especialidadSchema);
const Usuario = mongoose.model('Usuario', usuarioSchema);
const Turno = mongoose.model('Turno', turnoSchema);
const Consulta = mongoose.model('Consulta', consultaSchema);
const HistorialClinica = mongoose.model('HistorialClinica', historialClinicaSchema);

// Exportar los modelos para su uso en otras partes de la aplicación
module.exports = {
  TipoUsuario,
  Genero,
  Especialidad,
  Usuario,
  Turno,
  Consulta,
  HistorialClinica,
};
