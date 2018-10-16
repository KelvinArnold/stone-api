const express = require('express');
let router = express.Router();
const purchase_controller = require('./../controllers/purchase.controller');

router.get('/', purchase_controller.get_all);

router.post('/', purchase_controller.create)

module.exports = router;