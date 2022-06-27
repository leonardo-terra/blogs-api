const blogPostService = require('../services/blogPost.services');

const getPosts = async (req, res) => {
  const posts = await blogPostService.getPosts();
  return res.status(200).send(posts);
};

const create = async (req, res) => {
  const newPost = await blogPostService.create(req.body, req.headers);
  
  return res.status(200).send(newPost);
};

module.exports = { getPosts, create };