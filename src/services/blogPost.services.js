const { BlogPost, Category, User, PostCategory } = require('../database/models');

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
  const newPost = await BlogPost.create({ userId, title, content });
  const arrayToBulkCreate = createArrayToBulkCreate(newPost.id, categoryIds);
  console.log('>>>>>>>>>>', arrayToBulkCreate);
  await PostCategory.bulkCreate(arrayToBulkCreate);
  return newPost;
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