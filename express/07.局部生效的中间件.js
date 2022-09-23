const express = require("express");
const app = express();

const mw1 = function (req, res, next) {
console.log('中间件实现');
    next();
}


app.get('/',mw1, (req, res) => {
    res.send('hello world');
})
app.get('/user', (req, res) => {
    res.send('user');
})

app.listen(80, () => {
    console.log('http://127.0.0.1/8080');
})