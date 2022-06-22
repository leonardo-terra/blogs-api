const { getByEmail } = require('./user.services');

const { generateToken } = require('../utils/jwt');

const authentication = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Some required fields are missing');
  }

  const userInfo = await getByEmail(email);
  const token = generateToken(userInfo);
  return { token };
};

module.exports = { authentication };