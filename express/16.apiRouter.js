const { query } = require("express");
const express = require("express");

const apiRouter = express.Router();

// 挂载对应路由
apiRouter.get('/get', (req, res) => {
    // 通过req.query 获取客户端通过查询字符串，发送到服务器的数据
    var query = req.query;
    res.send({
        status: 0,  //0成功 1失败
        msg: 'GET请求成功！',  //状态的描述
        data: query    //需要响应给客户端的数据
        
    })
})


apiRouter.post('/post', (req, res) => {
    // 获取客户端通过请求体，发送到服务器的URL-encoded数据
    const body = req.body;

    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data:body
    })
})


apiRouter.delete('/delete', (req, res) => {
    res, send({
        status: 0,
        msg:'DELETE请求成功'
    })
})
module.exports = apiRouter;