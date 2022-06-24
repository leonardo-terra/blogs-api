const categoryServices = require('../services/category.services');
const { categoryValidationJoi } = require('../utils/categoryValidationJoi');

const create = async (req, res) => {
  try {
    const isValid = await categoryValidationJoi.validateAsync(req.body);
    const newCategory = await categoryServices.create(isValid);
    return res.status(201).send(newCategory);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    return res.status(200).send(await categoryServices.getAll());
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = { create, getAll };