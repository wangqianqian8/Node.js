// 路由模块
const { application } = require("express");
const express = require("express");

const router = express.Router();

router.get('/user/list',function(req,res){
    res.send('Get user list');

})
router.post('/user/add',function(req,res){
    res.send('Add new user');

})

module.exports = router;



