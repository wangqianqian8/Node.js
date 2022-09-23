const fs = require('fs');
fs.writeFile('f:./files/3.txt','王倩倩你好！',function(err){
   if(err){
    return console.log('文件写入失败'+err.message);
   }
   console.log('写入成功！');
})