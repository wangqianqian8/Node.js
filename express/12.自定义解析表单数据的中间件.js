const express = require("express");
// 处理查询字符串
const qs = require("querystring");
const app = express();

// 解析表单数据的中间件
app.use((req, res, next) => {
    // 定义中间件的具体业务逻辑
    let str = '';
    // str存储完整的data数据，chunk只是获取的一部分
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        // console.log(str);
        // name=zs&age=22&gender=%E7%94%B7
        // TODO:把字符串格式的数据解析成对象格式的数据
        // [Object: null prototype] { name: 'zs', age: '22', gender: '男' }
        const body = qs.parse(str);
        // 挂载为req的属性使下游中间件路由可以访问
        req.body = body;
        next();
        // console.log(body);
    })
})

app.post('/user', (req, res) => {
    res.send(req.body);
})


app.listen(80, () => {
    console.log('Express http://127.0.0.1/8080');

})