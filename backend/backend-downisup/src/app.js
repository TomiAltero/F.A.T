const express = require('express');
const sequelize = require('./config/database');
const usuariosGet = require('./routes/usuariosGet');
const usuariosPost = require('./routes/usuarioPost');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando correctamente!');
});


app.use('/api/usuarios', usuariosGet);
app.use('/api/usuarios', usuariosPost);



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
