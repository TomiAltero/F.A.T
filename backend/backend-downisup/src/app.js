const express = require('express');
const sequelize = require('./config/database');
const usuariosRouter = require('./routes/usuarios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/usuarios', usuariosRouter);

app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando correctamente!');
});



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
