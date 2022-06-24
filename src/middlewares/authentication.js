const { authenticateToken } = require('../utils/jwt');

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await authenticateToken(token);
    if (!user) throw Error('Token not found');
    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: error.message });
  }
};

module.exports = { authentication };