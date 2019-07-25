require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const products_controller = require('./products.controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json());


app.post('/api/products', products_controller.create)
app.get('/api/products', products_controller.getAll)


massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(SERVER_PORT, () => console.log(`Honky on port ${SERVER_PORT}`))
    })
    .catch(error => (
        console.log(error)
    ))

