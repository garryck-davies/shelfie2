const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const controller = require('../server/controller');

const app = express();
app.use(bodyParser.json);
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})
    .catch(err => console.log(err))


    // ********* EndPoints ********** //
app.get('/ap/inventory', controller.getInventory)


app.post('/api/product', (req, res) => {
    
})


app.listen(4000, () => console.log('Server listening on port 4000'));