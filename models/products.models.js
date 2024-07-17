const queries = require('../queries/products.queries')
const pool = require('../config/db_pgsql');

// CREATE
const createProduct = async (product) => {
    const { name, price, description, stock, categoryName } = product;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createProduct, [name, price, description, stock, categoryName]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// let newProduct = {
//     name: "Test Product",
//     price: 44.44,
//     description: "Description of Test Product",
//     stock: 44,
//     categoryName: "Miscellaneous"
// }
// createProduct(newProduct)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// READ ONE
const readProduct = async (productName) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.readProduct, [productName]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// readProduct('Test Product')
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

// READ BY FILTER
const readProductsByFilter = async (search, categoryName, filter, order, limit, offset) => {
    let client, result;
    try {
        client = await pool.connect();

        if (order === 'asc') {
            const data = await client.query(queries.readProductsByFilterAsc, [`%${search}%`, categoryName, filter, limit, offset]);
            result = data.rows;
        } else if (order === 'desc') {
            const data = await client.query(queries.readProductsByFilterDesc, [`%${search}%`, categoryName, filter, limit, offset]);
            result = data.rows;
        }
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// readProductsByFilter('', 'Electronics', 'price', 'asc', 3, 0)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// UPDATE
const updateProduct = async (product) => {
    const { name, price, description, stock, categoryName, actualName } = product;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateProduct, [name, price, description, stock, categoryName, actualName]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// const updatedProduct = {
//     name : "Test Product 2",
//     price : 444.44,
//     description : "Description of Test Product 2",
//     stock : 444,
//     categoryName : "Electronics",
//     actualName : "Test Product"
// }
// updateProduct(updatedProduct)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// DELETE
const deleteProduct = async (productName) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteProduct, [productName])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// deleteProduct('Test Product 2')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const products = {
    createProduct,
    readProduct,
    readProductsByFilter,
    updateProduct,
    deleteProduct
}

module.exports = products;