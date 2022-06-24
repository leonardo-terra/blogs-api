const User = require('../services/user.services');
const middlewares = require('../middlewares');
const { userValidationJoi } = require('../utils/userValidationJoi');

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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = await User.getById(id);
    if (!userInfo) return res.status(404).send({ message: 'User does not exist' });
    return res.status(200).send(userInfo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const isUnique = await middlewares.isUnique(req.body.email);
    const isValid = await userValidationJoi.validateAsync(req.body);

    if (!isUnique) return res.status(409).send({ message: 'User already registered' });
    const token = await User.create(isValid);
    return res.status(201).send(token);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = { getUsers, getByEmail, create, getById };