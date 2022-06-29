const Joi = require('joi');

const errorMessageRequired = 'Some required fields are missing';

const postValidationJoi = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().integer()).required(),
}).messages({
  'any.required': errorMessageRequired,
  'string.empty': errorMessageRequired,
});

module.exports = { postValidationJoi };