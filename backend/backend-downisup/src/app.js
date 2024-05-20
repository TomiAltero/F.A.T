const express = require('express');
const sequelize = require('./config/database');
const usuariosRoutes = require('./routes/usuariosRoutes');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors'); // Importa el middleware cors

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando correctamente!');
});

app.use('/api/usuarios', usuariosRoutes);

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

