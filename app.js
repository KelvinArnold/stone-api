const express = require('express');
const bodyParser = require('body-parser');
const app = express();// Set up mongoose connection
const mongoose = require('mongoose');
const cors = require('./middleware/cors');

let dev_db_url = 'mongodb://storeowner:storeowner1234@ds037758.mlab.com:37758/stonedb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);

// routes
const routeProducts = require('./routes/product.route');
const routePurchase = require('./routes/purchase.route');
const routeToken = require('./routes/token.route');

app.use('/stone/api/products', routeProducts);
app.use('/stone/api/purchases', routePurchase);
app.use('/stone/api/purchases/token', routeToken);

module.exports = app;
