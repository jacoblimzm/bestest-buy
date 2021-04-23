const Joi = require("joi");

// user validation schema

const userValidSchema = Joi.object({
  username: Joi.string().lowercase().min(5).max(30).required(),
  password: Joi.string().min(8).max(12).required(),
  email: Joi.string().lowercase().email().required(),
  address: Joi.string().required(),
  role: Joi.string().required(),
});

// product validation schema

module.exports = {
    userValidSchema
}