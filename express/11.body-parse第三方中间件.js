const express = require("express");

const app = express();
app.get('/', (req, res) => {
    res.send('hello world');
})
app.post('/', (req, res) => {
    res.send('postnod');
})

app.listen(80, () => {
    console.log('http://127.0.0.1/80');
})