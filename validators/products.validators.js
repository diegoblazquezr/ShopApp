const { body, query } = require("express-validator");

const validateCreateProduct = [
    body("name")
        .exists().withMessage("Name of product is required")
        .isString().withMessage("Name should be a string"),
    body("price")
        .exists().withMessage("Price is required")
        .isNumeric().withMessage("Price should be a number"),
    body("description")
        .exists().withMessage("Product description is required")
        .isString().withMessage("Description should be a string"),
    body("stock")
        .exists().withMessage("Stock quantity is required")
        .isInt().withMessage("Stock should be an integer"),
    body("categoryName")
        .exists().withMessage("Category name is required")
        .isString().withMessage("Category name should be a string")
];

const validateUpdateProduct = [
    body("actualName")
        .exists().withMessage("Current product name is required")
        .isString().withMessage("Current product name should be a string"),
    body("name")
        .optional()
        .isString().withMessage("Name should be a string"),
    body("price")
        .optional()
        .isNumeric().withMessage("Price should be a number"),
    body("description")
        .optional()
        .isString().withMessage("Description should be a string"),
    body("stock")
        .optional()
        .isInt().withMessage("Stock should be an integer"),
    body("categoryName")
        .optional()
        .isString().withMessage("Category name should be a string")
];

const validateReadProducts = [
    query("productName")
        .optional()
        .isString().withMessage("Product name should be a string"),
    query("search")
        .optional()
        .isString().withMessage("Search query should be a string"),
    query("categoryName")
        .optional()
        .isString().withMessage("Category name should be a string"),
    query("filter")
        .optional()
        .isIn(['date_added', 'name', 'price']).withMessage("Invalid filter value"),
    query("order")
        .optional()
        .isIn(['asc', 'desc']).withMessage("Order must be 'asc' or 'desc'"),
    query("limit")
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage("Limit should be an integer between 1 and 100"),
    query("offset")
        .optional()
        .isInt({ min: 0 }).withMessage("Offset should be a non-negative integer"),
    query()
        .custom((value, { req }) => {
            if (req.query.productName) {
                // If productName is provided, other filter params should not be present
                if (req.query.search || req.query.categoryName || req.query.filter || req.query.order || req.query.limit || req.query.offset) {
                    throw new Error("When querying by productName, other filter parameters should not be present");
                }
            } else if (req.query.search || req.query.categoryName) {
                // If using filter search, all filter params should be present
                if (!req.query.filter || !req.query.order || !req.query.limit || !req.query.offset) {
                    throw new Error("When using filter search, all filter parameters (filter, order, limit, offset) are required");
                }
            } else {
                throw new Error("Either productName or search parameters are required");
            }
            return true;
        })
];

const validateDeleteProduct = [
    query("productName")
        .exists().withMessage("Product name is required to delete a product")
        .isString().withMessage("Product name should be a string")
];

module.exports = {
    validateCreateProduct,
    validateUpdateProduct,
    validateReadProducts,
    validateDeleteProduct
};