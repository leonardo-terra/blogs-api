const Joi = require('joi');

const userValidationJoi = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(6),
  image: Joi.string(),
});

module.exports = { userValidationJoi };