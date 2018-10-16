const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  cep: {type: String, required: true },
  address: {type: String, required: true },
  addressNumber: {type: Number, required: true },
  cpf: {type: String, required: true },
  cardNumber: {type: String, required: true },
  cardName: {type: String, required: true },
  cardValidate: {type: String, required: true },
  cardCvv: {type: String, required: true },
  productId: {type: String, required: true },
  productTitle: {type: String, required: true },
  productPrice:  {type: String, required: true },
  quantity: {type: Number, required: true }
});

// Export the model
module.exports = mongoose.model('Purchase', PurchaseSchema);