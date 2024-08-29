const express = require('express')
const router = express.Router()
const WarehouseController = require('../controllers/warehouseController')

const warehouseController = new WarehouseController()

router.post('/warehouse', warehouseController.optimize.bind(warehouseController))

module.exports = router