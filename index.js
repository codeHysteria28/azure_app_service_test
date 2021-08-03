const express = require('express');
const app = express();
const mongoclient = require('mongodb').MongoClient;

const port = process.env.PORT || 3333;

app.get('/', (req,res) => {
    res.send('Hello Azure');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});