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

const checkCategoryIds = async (categoryIds) => {
  const categoriesList = await Category.findAll();
  const isValid = categoryIds.every((id) => categoriesList.some((el) => id === el.dataValues.id));
  return isValid;
};

const create = async ({ title, content, categoryIds }, userId) => {
  const transaction = await sequelize.transaction();
  try {
    const isCategoryValid = await checkCategoryIds(categoryIds);
    if (!isCategoryValid) throw new Error('"categoryIds" not found');

    const newPost = await BlogPost.create({ title, content, userId }, { transaction });

    const arrayToBulkCreate = createArrayToBulkCreate(newPost.id, categoryIds);
    await PostCategory.bulkCreate(arrayToBulkCreate, { transaction });

    await transaction.commit();
    return newPost;
  } catch (error) {
    await transaction.rollback();
    throw new Error(error.message);
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