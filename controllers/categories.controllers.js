const categoriesModels = require('../models/categories.models');

const readCategoriesController = async (req, res) => {

    let categories;
    try {
        categories = await categoriesModels.readCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Prueba Postman
// GET ALL http://localhost:3000/api/categories

module.exports = {
    readCategoriesController
}