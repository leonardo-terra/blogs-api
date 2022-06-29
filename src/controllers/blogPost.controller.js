const blogPostService = require('../services/blogPost.services');
const { postValidationJoi } = require('../utils/postValidationJoi');

const getPosts = async (req, res) => {
  const posts = await blogPostService.getPosts();
  return res.status(200).send(posts);
};

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const isValid = await postValidationJoi.validateAsync(req.body);
    if (!title || !content || !categoryIds) throw new Error('Some required fields are missing');
    const { id } = res.locals.payload;
    const newPost = await blogPostService.create(isValid, id);
    return res.status(201).send(newPost);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = { getPosts, create };