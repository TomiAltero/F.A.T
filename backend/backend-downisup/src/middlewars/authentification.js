const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    console.log("No authorization header");
    return res.status(403).json({ error: "No posee token de autenticacion" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    console.log("No token found in authorization header");
    return res.status(403).json({ error: "No posee token de autenticacion" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("Token verification error:", err);
      return res
        .status(401)
        .json({ error: "Error en la autenticacion del token" });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verificarToken;
