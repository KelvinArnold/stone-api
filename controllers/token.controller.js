const Token = require('./../models/token.model');
const ValidateToken = require('./../validates/token.validate');

const get_by_id = (req, res) => {
  const {id} = req.params;
  Token.findOne({token: id}, (err, token) => {
    if (err) return next(err);
    res.send(token);
  })
}

const create_token = (req, res) => {
  const {error} = ValidateToken.validate(req.body);
  if (error) {
    res.status(400)
    .send(error.details[0].message);
    return;
  }
  const token = new Token({
    token: req.body.token,
    productId: req.body.productId,
    productTitle: req.body.productTitle,
    productPrice: req.body.productPrice,
    quantity: req.body.quantity
  });
  console.log(token);
  token.save(err => {
    if (err) return next(err);
    res.send(token);
  });
}

const delete_token = (req, res) => {
  const {id} = req.params;
  Token.findByIdAndRemove(id, err => {
    if (err) return next(err);
    res.send('Removido com sucesso');
  })
}

exports.get_by_token = get_by_id;
exports.create = create_token;
exports.delete = delete_token;
