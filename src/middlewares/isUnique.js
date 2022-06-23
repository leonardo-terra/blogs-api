const { User } = require('../database/models');

const isUnique = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  if (userInfo === null) return true;
  return false;
};
module.exports = { isUnique };
