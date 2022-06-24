const Joi = require('joi');

const categoryValidationJoi = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '"name" is required',
  }),
});

module.exports = { categoryValidationJoi };