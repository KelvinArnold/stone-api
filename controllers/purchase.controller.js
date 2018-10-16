const Purchase = require('./../models/purchase.model');
const ValidatePurchase = require('./../validates/purchase.validate');

const get_all = (req, res) => {
  Purchase.find((err, products) => {
    if (err) return next(err);
    res.send(products);
  })
}

const create = (req, res) => {
  const { error } = ValidatePurchase.validate(req.body);
  if (error) {
    res.status(400)
    .send(error.details[0].message);
    return;
  }
  const purchase = new Purchase({
    cep: req.body.cep,
    address: req.body.address,
    addressNumber: req.body.addressNumber,
    cpf: req.body.cpf,
    cardNumber: req.body.cardNumber,
    cardName: req.body.cardName,
    cardValidate: req.body.cardValidate,
    cardCvv: req.body.cardCvv,
    productId: req.body.productId,
    productTitle: req.body.productTitle,
    productPrice: req.body.productPrice,
    quantity: req.body.quantity
  });
  purchase.save(err => {
    if (err) return next(err);
    res.send(purchase);
  });
}

exports.get_all = get_all;
exports.create = create;