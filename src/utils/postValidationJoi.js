const Joi = require('joi');

const errorMessageRequired = 'Some required fields are missing';
const errorMessageMinMax = '"categoryIds" not found';

const postValidationJoi = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().integer().min(1).max(2)).required(),
}).messages({
  'any.required': errorMessageRequired,
  'string.empty': errorMessageRequired,
  'number.min': errorMessageMinMax,
  'number.max': errorMessageMinMax,

});

module.exports = { postValidationJoi };