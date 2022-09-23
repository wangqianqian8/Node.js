const express = require("express");
// 处理查询字符串
const app = express();

// 1.导入自己封装的中间件模块
const customBodyParser = require('./14.custom-body-parser')
// 2.将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser);
app.post('/user', (req, res) => {
    res.send(req.body);
})


app.listen(80, () => {
    console.log('Express http://127.0.0.1/8080');

})