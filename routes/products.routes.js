const productsController = require('../controllers/products.controllers');
const router = require('express').Router();
const { 
    validateCreateProduct, 
    validateUpdateProduct, 
    validateReadProducts, 
    validateDeleteProduct 
} = require("../validators/products.validators");

// POST http://localhost:3000/api/product
router.post("/", validateCreateProduct, productsController.createProductController);

// GET ONE http://localhost:3000/api/product?productName=Test Product
// GET BY FILTER http://localhost:3000/api/product?search=laptop&categoryName=Electronics&filter=price&order=asc&limit=10&offset=0
router.get("/", validateReadProducts, productsController.readProductsController);

// PUT http://localhost:3000/api/product
router.put("/", validateUpdateProduct, productsController.updateProductController);

// DELETE http://localhost:3000/api/product?productName=Test Product 2
router.delete("/", validateDeleteProduct, productsController.deleteProductController);

module.exports = router;