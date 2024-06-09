require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const usuariosRoutes = require("./routes/usuariosRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Reemplaza con el origen correcto si es necesario
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡El servidor está funcionando correctamente!");
});

app.use("/api/usuarios", usuariosRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos y modelos sincronizados.");
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

console.log("Token Secret:", process.env.TOKEN_SECRET);
