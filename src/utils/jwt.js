const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'minhasenhasecreta';

const jwtConfig = {
  expiresIn: '5min',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => jwt.sign(
  { email }, TOKEN_SECRET, jwtConfig,
);

const authenticateToken = async (token) => {
  if (!token) {
    throw Error('Expired or invalid token');
  }
  try {
    const validate = await jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    throw Error('Expired or invalid token');
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};