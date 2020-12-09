const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation.controller');
const userController = require('../controllers/users.controller');
const validationMiddleware = require('../middleware/validation-middleware');

router.post('/api/login', validationMiddleware.login, userController.login);

router.get('/api/crypto/btc', quotationController.getQuotation);

router.post('/api/crypto/btc', [validationMiddleware.checkToken, validationMiddleware.checkParams], quotationController.updateRates);

module.exports = router;