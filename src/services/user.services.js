const { User } = require('../database/models');

const getUsers = () => User.findAll();

const getByEmail = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (!userInfo) throw Error('Invalid fields');
  return userInfo.dataValues;
};

module.exports = { getUsers, getByEmail };