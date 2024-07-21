const queries = require('../queries/categories.queries')
const pool = require('../config/db_pgsql');

// READ ALL 
const readCategories = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.readCategories);
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
// readCategories()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const categories = {
    readCategories
}

module.exports = categories;