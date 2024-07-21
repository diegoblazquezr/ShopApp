const categoriesController = require('../controllers/categories.controllers');
const router = require('express').Router();

// GET ALL http://localhost:3000/api/categories
router.get("/", categoriesController.readCategoriesController);

module.exports = router;