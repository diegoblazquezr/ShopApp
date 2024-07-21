const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express(); // Initialize server
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import Middlewares
const morgan = require('./middlewares/morgan');

// Middlewares
app.use(morgan(':method :url :status - :response-time ms :body'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(cors());

// Routes
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");
const categoriesRoutes = require("./routes/categories.routes");

// API Routes
app.use('/api/user', usersRoutes);
app.use('/api/product', productsRoutes);
app.use('/api/categories', categoriesRoutes);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const server = app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;