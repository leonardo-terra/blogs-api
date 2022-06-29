const { BlogPost, Category, User, PostCategory, sequelize } = require('../database/models');

const getPosts = () => BlogPost.findAll(
  {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

const createArrayToBulkCreate = (postId, categories) => {
  const arrayToBulkCreate = categories.map((categoryId) => ({ postId, categoryId }));
  return arrayToBulkCreate;
};

const create = async ({ title, content, categoryIds }, userId) => {
  const transaction = await sequelize.transaction();
  try {
    console.log(userId);
    const arrayToBulkCreate = createArrayToBulkCreate(userId, categoryIds);

    const newPost = await BlogPost.create({ title, content, userId }, { transaction });
    await PostCategory.bulkCreate(arrayToBulkCreate, { transaction });
    await transaction.commit();
    return newPost;
  } catch (error) {
    await transaction.rollback();
    return console.log(error.message);
  }
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