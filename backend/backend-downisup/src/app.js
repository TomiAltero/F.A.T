const path = require("path");

require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const usuariosRoutes = require("./routes/usuariosRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡El servidor está funcionando correctamente!");
});

app.use("/api/usuarios", usuariosRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
