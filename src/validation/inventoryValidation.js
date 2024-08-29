const Joi = require('joi');

// Define the schema for each inventory item
const inventoryItemSchema = Joi.object({
    name: Joi.string().required(),
    size: Joi.number().positive().required(),
    value: Joi.number().positive().required(),
    priority: Joi.number().integer().min(1).max(100).required(),
    dependencies: Joi.array().items(Joi.string()).required()
});

// Define the schema for the entire request body
const inventorySchema = Joi.object({
    inventory: Joi.array().items(inventoryItemSchema).required(),
    total_space: Joi.number().positive().required()
});

module.exports = { inventorySchema };
