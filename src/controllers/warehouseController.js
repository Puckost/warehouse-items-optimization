const whService = require('../services/warehouseService')
const {
  inventorySchema
} = require('../validation/inventoryValidation')

class WarehouseController {
  constructor() {
    // Dependency injection
    this.testService = new whService()
  }

  optimize(req, res) {
    const {
      error
    } = inventorySchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    res.status(200).json({
      message: "Calculation successful",
      data: this.testService.getOptimalItems(req.body.inventory, req.body.total_space)
    });
  }
}

module.exports = WarehouseController