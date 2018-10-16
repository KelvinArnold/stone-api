const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {type: String, required: true },
  picture: {type: Map, required: true },
  description: {type: String, required: true },
  category: {type: String, required: true },
  price: {type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);