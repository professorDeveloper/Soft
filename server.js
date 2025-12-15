const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db/db');
app.listen(5000, () => {
    console.log('server is running ');
})

//