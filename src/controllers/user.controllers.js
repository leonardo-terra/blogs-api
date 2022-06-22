const User = require('../services/user.services');

const getUsers = async (_req, res) => {
  try {
    const users = await User.getUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const userInfo = await User.getByEmail(email);
    res.status(200).send(userInfo);
  } catch (error) {
    return res.status(error.status).send({ message: error.message });
  }
};

module.exports = { getUsers, getByEmail };