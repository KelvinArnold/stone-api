const express = require('express');
let router = express.Router();
const product_controller = require('./../controllers/product.controller');

router.get('/', product_controller.get_all);

router.get('/:id', product_controller.get_by_id);

router.post('/', product_controller.create);


module.exports = router;