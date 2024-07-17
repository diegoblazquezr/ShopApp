const productsController = require('../controllers/products.controllers');
const router = require('express').Router();
// const { validateCreateProduct, validateGetProductById, validateUpdateProduct, validateDeleteProduct } = require("../validators/products.validators");

// POST http://localhost:3000/api/product
router.post("/", productsController.createProductController);

// GET ONE http://localhost:3000/api/product?productName=Test Product
// GET BY SEARCH http://localhost:3000/api/product?search=hoodie&limit=10&offset=0
// GET BY FILTER http://localhost:3000/api/product?filter=name&order=desc&limit=10&offset=0
// GET BY CATEGORY http://localhost:3000/api/product?categoryName=Electronics&limit=10&offset=0
router.get("/", productsController.readProductsController);

// PUT http://localhost:3000/api/product
router.put("/", productsController.updateProductController);

// DELETE http://localhost:3000/api/product?productName=Test Product 2
router.delete("/", productsController.deleteProductController);

module.exports = router;