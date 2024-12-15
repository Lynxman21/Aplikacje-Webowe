const express = require('express');
const router = express.Router();

const ordersService = require('../services/ordersService')

router.get('/:id',ordersService.getAllUserOrders)

router.post('/',ordersService.addOrder);

router.delete('/:id',ordersService.deleteOrder);

router.patch('/:id',ordersService.patchOrder);

module.exports = router;