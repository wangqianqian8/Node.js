// 导入MySQL模块
const mysql = require("mysql");
// 建立与MySQL数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',    //数据库的IP地址
    user: 'root',         //登录数据库的账号
    password: 'admin123', //登录数据库的密码
    database:'my_db_01',  //指定要操作的数据库
})

// // 测试数据库是否正常工作
// db.query('select 1', (err, result) => {

//     if (err) return console.log(err.message);

//     console.log(result);
// })

// -----------------------------------查询-------------------------------------------------
// 查询users表中的所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, result) => {
//     // 查询数据失败
//     if (err) return console.log(err.message);
//     // 注意：如果是select语句，执行结果是数组
//     // 查询数据成功
//         console.log(result);
// })



// -----------------------------------增添-------------------------------------------------

// // 向users表中新增一条数据，其中username的值为Spider-Man,password 的值为pcc123
// const user = { username: 'Spider-Man', password: 'pcc123' }
// // ?为占位符
// const sqlStr = 'insert into users (username,password) value(?,?)'
// // 执行sql语句
// db.query(sqlStr,[user.username,user.password],(err, result) => {
//         // 插入数据失败
//         if (err) return console.log(err.message);
//         // 插入数据成功
//         // 注意：插入语句，results是一个对象，可以通过affectedRows属性，来判断是否插入数据成功
//             if(result.affectedRows === 1){console.log('插入数据成功');}
//     })



// // 简便写法
// const user = { username: 'Spider-Man2', password: 'pcc456' }
// // ?为占位符
// const sqlStr = 'insert into users set ?'
// // 执行sql语句
// db.query(sqlStr,user,(err, result) => {
//         // 插入数据失败
//         if (err) return console.log(err.message);
//         // 插入数据成功
//         // 注意：插入语句，results是一个对象，可以通过affectedRows属性，来判断是否插入数据成功
//             if(result.affectedRows === 1){console.log('插入数据成功');}
// })
    


// -----------------------------------修改-------------------------------------------------
// const user = { id: 6, username: 'aaa', password: '000' }
// const sqlStr = 'update users set username=?,password=? where id=?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//             // 更新数据失败
//         if (err) return console.log(err.message);
//         // 更新数据成功
//             if(results.affectedRows === 1){console.log('更新数据成功');}
// })


// const user = { id: 6, username: 'aaa', password: '000' }
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//             // 更新数据失败
//         if (err) return console.log(err.message);
//         // 更新数据成功
//             if(results.affectedRows === 1){console.log('更新数据成功');}
// })



// -----------------------------------删除-------------------------------------------------
// const sqlStr = 'delete from users where id = ?'
// db.query(sqlStr, 5, (err, results) => {
//          if (err) return console.log(err.message);
//             // 删除数据成功
//     // sql语句只有一个占位符，可以省略数组
//          if(results.affectedRows === 1){console.log('删除数据成功');}
// })


// 标记删除
db.query('update users set status=1 where id=?', 6, (err, results) => {
    if (err) return console.log(err.message);
    
    if(results.affectedRows === 1) {console.log('删除数据成功！');}
})

