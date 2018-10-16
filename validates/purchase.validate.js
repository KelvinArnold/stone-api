const Joi = require('joi');
// validate purchase schema
const validatePurchase = (purchase) => {
  const schema = Joi.object().keys({
    cep: Joi.string().min(8).required(),
    address: Joi.string().required(),
    addressNumber: Joi.string().required(),
    cpf: Joi.string().min(11).required(),
    cardNumber: Joi.string().min(16).required(),
    cardName: Joi.string().min(1).required(),
    cardValidate: Joi.string().min(6).required(),
    cardCvv: Joi.string().min(3).required(),
    productId: Joi.any().required(),
    productTitle: Joi.any().required(),
    productPrice: Joi.any().required(),
    quantity: Joi.number().integer().min(1).required()
  });
  return Joi.validate(purchase, schema);
};

exports.validate = validatePurchase;