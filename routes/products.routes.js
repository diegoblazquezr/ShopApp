const productsController = require('../controllers/products.controllers');
const router = require('express').Router();
// const { validateCreateProduct, validateGetProductById, validateUpdateProduct, validateDeleteProduct } = require("../validators/products.validators");

// POST http://localhost:3000/api/product
router.post("/", productsController.createProductController);

// GET ONE http://localhost:3000/api/product?productName=Test Product
// GET BY FILTER http://localhost:3000/api/product?search=laptop&categoryName=Electronics&filter=price&order=asc&limit=10&offset=0
router.get("/", productsController.readProductsController);

// PUT http://localhost:3000/api/product
router.put("/", productsController.updateProductController);

// DELETE http://localhost:3000/api/product?productName=Test Product 2
router.delete("/", productsController.deleteProductController);

module.exports = router;