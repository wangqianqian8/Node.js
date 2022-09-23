// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require("express-session");
app.use(session({
       secret: 'wqq',
       resave: false,
       saveUninitialized:true,
          })
       )




// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // ------------------------------------session存数据---------------------------------------------
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中 
  // user自己起的，只有配置express-session这个中间件，才能够通过req获取session属性
  req.session.user = req.body;  //将用户的信息，存储到session中
  req.session.islogin = true;  //将用户的登录状态，存储到session中


  res.send({ status: 0, msg: '登录成功' })
})



  // ------------------------------------session取数据---------------------------------------------


// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  // 判断用户是否登录
  if (!req.session.islogin) {
    return res.send({status:1,msg:'fail'})
  }
  res.send({ status: 0, msg: 'success', username: req.session.user.username });
})


  // ------------------------------------session清空数据---------------------------------------------

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy();  //只会清空当前用户的session
  res.send({
    status: 0,
    msg:'退出登录成功'
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
  console.log('Express server running at http://127.0.0.1:8080')
})