const express = require("express");

const app = express();

// 解析表单中的JSON格式
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post('/user', (req, res) => {
    // 在服务器可以使用req.body来接受客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
    res.send('ok');
})

app.post('/book', (req, res) => {
    // 默认情况下，如果不配置解析urlencoded数据的中间件，则req.body默认等于{}
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})