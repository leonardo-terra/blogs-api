const { Category } = require('../database/models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAll = () => Category.findAll();

module.exports = { create, getAll };