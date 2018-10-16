const express = require('express');
let router = express.Router();
const token_controller = require('./../controllers/token.controller');

router.get('/:id', token_controller.get_by_token);

router.post('/', token_controller.create);

router.delete('/:id', token_controller.delete);

module.exports = router;
