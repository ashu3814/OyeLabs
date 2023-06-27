const controller = require('../controllers/CustomerController')
const express = require('express');
const router = express.Router();


router.post('/CustomerRegister', controller.CustomerRegister)



module.exports = router