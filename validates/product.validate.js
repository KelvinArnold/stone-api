const Joi = require('joi');
// validate product Schema
const validade_product = (product) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    picture: Joi.any().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().min(1).required()
  });
  return Joi.validate(product, schema);
}
exports.validate = validade_product;