/* const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    throw Error({ status: 401, message: 'Dados incompletos' });
  }

  const userInfo = await User.findOne({ where: { email } });
}; */