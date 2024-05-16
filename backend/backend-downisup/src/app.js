const express = require('express');
const sequelize = require('./config/database');
const Usuario = require('./models/usuarios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); // Utiliza el modelo de Usuario para realizar la consulta
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Hubo un error al obtener usuarios' });
  }
});

// Ruta de prueba para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando correctamente!');
});

// Sincroniza la base de datos y comienza el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos y modelos sincronizados.');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

