const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation.controller');
const userController = require('../controllers/users.controller');
const validationMiddleware = require('../middleware/validation-middleware');

router.post('/api/login', validationMiddleware.login, userController.login);

router.get('/api/cryto/btc', quotationController.getQuotation);

module.exports = router;