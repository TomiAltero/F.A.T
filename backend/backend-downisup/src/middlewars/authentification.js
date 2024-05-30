const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('Token:', token);
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No se proporcionó token' });
  }

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
}

module.exports = authenticateToken;

