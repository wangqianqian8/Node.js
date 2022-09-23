const express = require("express");
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 必须在cors中间件之前，配置jsonp接口 
app.get('/api/jsonp', (req, res) => {
    // TODO:定义具体实现过程
    // 1.得到函数的名称 req.query里面的callback属性
    const funcName = req.query.callback;
    // 2.定义要发送客户端的数据对象
    var data = {
        name: 'zs',
        age:22
    }
    // 3.拼接出一个函数的调用  cb(data) data转成json格式字符串
    const scriptStr =`${funcName}(${JSON.stringify(data)})`
    // 4.把拼接的字符串，相应给客户端
    res.send(scriptStr);
})


// 一定要在路由之前配置cors这个中间件，从而解决接口跨域的问题 
const cors = require("cors");
app.use(cors());

// 导入并注册路由模块
const apiRouter = require("./16.apiRouter");
app.use('/api', apiRouter);

app.listen(80, () => {
    console.log('Express  running at http://127.0.0.1');
})