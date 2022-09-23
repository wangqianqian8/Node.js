const express = require("express");

const app = express()

// 监听客户端get post请求，并向客户端响应内容
app.get('/user',(req,res)=>{
// res.sed() 向客户端响应一个JSON对象
res.send({name:'zs',age:20,gender:'男'});
})

app.post('/user',(req,res)=>{
    // res.sed() 向客户端响应一个文本字符串
    res.send('请求成功');
    })
    

    app.get('/',(req,res)=>{
        console.log(req.query);
        res.send(req.query);
    })


    app.get('/user/:id',(req,res)=>{
      console.log(req.params);
        res.send(req.params);
        })
        
app.listen(8080,()=>{
    console.log('express server running at http://127.0.0.1:8080');
})