const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  token: {type: String, required: true },
  productId: {type: String, required: true },
  productTitle: {type: String, required: true },
  productPrice: {type: Number, required: true },
  quantity: {type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Token', TokenSchema);