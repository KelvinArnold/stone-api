const Product = require('./../models/product.model');
const ValidateProduct = require('./../validates/product.validate');

const get_all = (req, res) => {
  Product.find((err, products) => {
    if (err) return next(err);
    res.send(products);
  })
}
const get_by_id = (req, res) => {
  const {id} = req.params;
  Product.findById(id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  })
}
const create = (req, res) => {
  const {error} = ValidateProduct.validate(req.body);
  if (error) {
    res.status(400)
    .send(error.details[0].message);
    return;
  }
  const product = new Product({
    title: req.body.title,
    picture: req.body.picture,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price
  });
  product.save(err => {
    if (err) return next(err);
    res.send(product);
  });
}

exports.get_all = get_all;
exports.get_by_id = get_by_id;
exports.create = create;