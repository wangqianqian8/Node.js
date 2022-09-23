const express = require("express");
const app = express();


app.get('/', (req, res) => {
   throw new Error('服务器内部的错误');
    res.send('Home page');  //发生错误这行没执行
})
// 定义错误级别的中间件捕获项目中的错误，防止程序崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res.send('Error:'+err.message);
})

app.listen(80, () => {
    console.log('http://127.0.0.1/');
})