const qs = require("querystring");

// 解析表单数据的中间件
const bodyParser =(req, res, next) => {
    // 定义中间件的具体业务逻辑
    let str = '';
    // str存储完整的data数据，chunk只是获取的一部分
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {

        const body = qs.parse(str);
        // 挂载为req的属性使下游中间件路由可以访问
        req.body = body;
        next();
        // console.log(body);
    })
}

module.exports = bodyParser;