var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var memno = req.session.memno;
    var serno = req.body.serno;   //取得產品編號
    console.log(memno,serno);
    user.deleteFriend(memno,serno).then(d => {
        console.log(d);
        if(d>=0){
            res.render('removeSuccessP', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;