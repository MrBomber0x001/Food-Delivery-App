const Joi = require("joi");
const validateUser = (body) => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(100),
    lastname: Joi.string().min(2).max(100),
    email: Joi.string().email().min(2).max(255).required(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(body);
};

module.exports = validateUser;
