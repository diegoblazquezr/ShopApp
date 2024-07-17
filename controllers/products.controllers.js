const product = require('../models/products.models');
// const { validationResult } = require("express-validator");

const createProductController = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    const newProduct = req.body;
    if (
        "name" in newProduct &&
        "price" in newProduct &&
        "description" in newProduct &&
        "stock" in newProduct &&
        "categoryName" in newProduct
    ) {
        try {
            const response = await product.createProduct({name: newProduct.name, price: newProduct.price, description: newProduct.description, stock: newProduct.stock, categoryName: newProduct.categoryName});
            res.status(201).json({
                items_created: response
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
}
// Prueba Postman
// POST http://localhost:3000/api/product
// {
//     "name": "Test Product",
//     "price": 44.44,
//     "description": "Description of Test Product",
//     "stock": 44,
//     "categoryName": "Miscellaneous"
// }

const readProductsController = async (req, res) => {
    if (req.query.limit > 100) {
        return res.status(400).json("Limit can not surpass 100");
    }
    let products;
    try {
        if (req.query.productName || req.query.productName == "") {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            products = await product.readProduct(req.query.productName);
            res.status(200).json(products);
        } else if (req.query.search || req.query.search == "") {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            products = await product.readProductsBySearch(req.query.search, req.query.limit, req.query.offset);
            res.status(200).json(products);
        } else if (req.query.filter || req.query.filter == "") {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            products = await product.readProductsByFilter(req.query.filter, req.query.order, req.query.limit, req.query.offset);
            res.status(200).json(products);
        } else if (req.query.categoryName || req.query.categoryName == "") {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }
            products = await product.readByProductsCategory(req.query.categoryName, req.query.limit, req.query.offset);
            res.status(200).json(products);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Prueba Postman
// GET ONE http://localhost:3000/api/product?productName=Test Product
// GET BY SEARCH http://localhost:3000/api/product?search=hoodie&limit=10&offset=0
// GET BY FILTER http://localhost:3000/api/product?filter=name&order=desc&limit=10&offset=0
// GET BY CATEGORY http://localhost:3000/api/product?categoryName=Electronics&limit=10&offset=0

const updateProductController = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    const modifiedProduct = req.body;
    if (
        ("name" in modifiedProduct ||
        "price" in modifiedProduct ||
        "description" in modifiedProduct ||
        "stock" in modifiedProduct ||
        "categoryName" in modifiedProduct) &&
        "actualName" in modifiedProduct
    ) {
        try {
            const response = await product.updateProduct(modifiedProduct);
            res.status(201).json({
                items_updated: response
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "old_productName obligatorio y un campo de update mínimo" });
    }
}
// Prueba Postman
// PUT http://localhost:3000/api/product
// {
//     "name": "Test Product 2",
//     "price": 444.44,
//     "description": "Description of Test Product 2",
//     "stock": 444,
//     "categoryName": "Electronics",
//     "actualName": "Test Product"
// }

const deleteProductController = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    let products;
    try {
        products = await product.deleteProduct(req.query.productName);
        res.status(200).json(products); // [] con las products encontradas
    } catch (error) {
        res.status(500).json({ error: 'Error en la BBDD' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/product?productName=Test Product 2

module.exports = {
    createProductController,
    readProductsController,
    updateProductController,
    deleteProductController,
}