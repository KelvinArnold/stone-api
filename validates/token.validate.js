const Joi = require('joi');
// validate token Schema
const validade_token = (token) => {
  const schema = Joi.object().keys({
    token: Joi.any().required(),
    productId: Joi.any().required(),
    productTitle: Joi.any().required(),
    productPrice: Joi.any().required(),
    quantity: Joi.number().integer().min(1).required()
  });
  return Joi.validate(token, schema);
}
exports.validate = validade_token;