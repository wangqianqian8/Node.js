const express = require("express");
const app = express();
// 导入路由
const router = require("./03.router");
// 注册路由
app.use(router);
app.listen(80,()=>{

})
