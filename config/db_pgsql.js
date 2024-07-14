const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'shopappdb',
    password: '123456'
});

// const pool = new Pool({
//     host: process.env.RENDER_HOST,
//     user: process.env.RENDER_USER,
//     password: process.env.RENDER_PASSWORD,
//     database: process.env.RENDER_DATABASE,
//     port: process.env.RENDER_PORT,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

pool.connect()
    .then(() => console.log('Connection to pgsql established'))
    .catch(err => console.log('Pgsql error connection', err.stack))

module.exports = pool;