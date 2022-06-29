const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'minhasenhasecreta';

const jwtConfig = {
  expiresIn: '45min',
  algorithm: 'HS256',
};

const generateToken = ({ id, email }) => jwt.sign(
  { data: email, id }, TOKEN_SECRET, jwtConfig,
);

const authenticateToken = async (token) => {
  if (!token) {
    throw Error('Token not found');
  }
  try {
    const validate = await jwt.verify(token, TOKEN_SECRET, jwtConfig);
    return validate;
  } catch (error) {
    throw Error('Expired or invalid token');
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};