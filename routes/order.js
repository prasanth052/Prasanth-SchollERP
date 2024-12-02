var express = require('express');

const { Createorder } = require('../controlleres/orderController');

const router = express.Router()

router.route('/orders').post(Createorder)




module.exports = router;
