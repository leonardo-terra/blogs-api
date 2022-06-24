const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const getUsers = () => User.findAll();

const getByEmail = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo) throw Error('Invalid fields');
  return userInfo.dataValues;
};

const create = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  const token = generateToken(email);
  return { token };
};

module.exports = { getUsers, getByEmail, create };