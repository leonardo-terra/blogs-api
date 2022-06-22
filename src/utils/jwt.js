const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'minhasenhasecreta';

const jwtConfig = {
  expiresIn: '5min',
  algorithm: 'HS256',
};

const generateToken = ({ email, password }) => jwt.sign(
  { email, password }, TOKEN_SECRET, jwtConfig,
);

const authenticateToken = async (token) => {
  if (!token) {
    throw Error({ status: 401, message: 'jwt malformed' });
  }
  try {
    const validate = await jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    throw Error({ status: 401, message: 'jwt malformed' });
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};