const fs = require('fs');
fs.readFile('./files/成绩.txt','utf8',function(err,result){
    if(err){
        return console.log('读取文件失败'+err.message);
    }
console.log('读取文件成功！'+result);


// 分割字符串成数组
const arrOld = result.split(" ");


// 字符串替换
var newarr = [];
arrOld.forEach(element => {
    newarr.push(element.replace('=',':'));
    
});

// 数组合并字符串
const newStr = newarr.join('\r\n');



fs.writeFile('./files/最新成绩-ok.txt', newStr,function(err){
    if(err){
     return console.log('文件写入失败'+err.message);
    }
    console.log('写入成功！');
})
 })