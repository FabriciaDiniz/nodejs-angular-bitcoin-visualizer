const express = require('express');
const quotationController = require('../controllers/quotation.controller');
const userController = require('../controllers/users.controller');
const validationMiddleware = require('../middleware/validation-middleware');

const router = express.Router();

router.post('/api/login', validationMiddleware.login, userController.login);

router.get('/api/crypto/current', quotationController.getCurrentRates);

router.get('/api/crypto/btc', quotationController.getQuotation);

router.post('/api/crypto/btc', [validationMiddleware.checkToken, validationMiddleware.checkParams], quotationController.updateRates);

module.exports = router;
