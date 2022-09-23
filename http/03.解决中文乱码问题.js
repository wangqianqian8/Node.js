const http = require("http");
const server = http.createServer();
server.on('request',(req,res)=>{
// console.log('someone visit our web server');
const str =`您请求的ULR地址是${req.url}，请求的method类型为${req.method}`;
// 调用res.setHeader()方法，设置Content-Type响应头，解决中文乱码
// Content-Type表示以什么样的形式解析
res.setHeader('Content-Type','text/html; charset=utf-8');
res.end(str);
})
server.listen(8080,()=>{
console.log('server running at http://127.0.0.1:8080');
})