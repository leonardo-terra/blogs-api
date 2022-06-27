const jwt = require('jsonwebtoken');
const { BlogPost, Category, User } = require('../database/models');

const getPosts = () => BlogPost.findAll(
  {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

const create = async ({ title, content, categoryIds }) => {
  
  return { title, content, categoryIds };
};

/* 
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    }); */

module.exports = { getPosts, create };