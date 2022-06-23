const { User } = require('../database/models');

const getUsers = () => User.findAll();

const getByEmail = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo) throw Error('Invalid fields');
  return userInfo.dataValues;
};

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = { getUsers, getByEmail, create };