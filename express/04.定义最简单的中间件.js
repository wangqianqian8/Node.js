const express =require("express");
const app = express();

// // 定义一个最简单的中间件函数
// const mw = function(req,res,next){
//     console.log('这是中间件');
//     // 把流转关系，转交给下一个路由或中间件
//     next();
// }
// // 将mw注册为全局生效的中间件
// app.use(mw);



// 简化
app.use(function(req,res,next){
    // console.log('这是中间件');
    next();
})


app.get('/', (req, res) => {
    res.send('Home Page');
    // console.log('调用/这个路由');
    // 这是中间件
    // 调用 / 这个路由
})
app.get('/user', (req, res) => {
    res.send('User Page');
})

app.listen(80,()=>{
    // console.log('http://127.0.0.1');
})