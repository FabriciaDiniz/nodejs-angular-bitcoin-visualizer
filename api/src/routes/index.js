const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation.controller');

router.get('/', quotationController.getQuotation);

module.exports = router;