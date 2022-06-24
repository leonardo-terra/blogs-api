const { User } = require('../database/models');
const { generateToken } = require('../utils/jwt');

const getUsers = async () => {
  const usersInfo = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return usersInfo;
};

const getByEmail = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo) throw Error('Invalid fields');
  return userInfo.dataValues;
};

const getById = async (id) => {
  const userInfo = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return userInfo;
};

const create = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  const token = generateToken(email);
  return { token };
};

module.exports = { getUsers, getByEmail, create, getById };