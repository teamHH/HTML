var express = require('express');
var router = express.Router();

var moment = require('moment');
const user = require('./utility/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  var memno = req.session.memno;
  var keyword=req.query.keyword;
  var invitedmemno=req.session.memno;
  var invitedmemno2=req.session.memno;
  var postmemno=req.session.memno;
  var postmemno2=req.session.memno;
  var memno10=req.session.memno;
  var memno11=req.session.memno;
  var memno12=req.session.memno;
  user.search(memno,keyword,keyword,invitedmemno,invitedmemno2,postmemno,postmemno2,memno10,memno11,memno12).then(data => {
    if(data==null){
        res.render('error');  //導向錯誤頁面
    }else if(data.posts.length > 0){
        data.member.birthday=moment(data.member.birthday).format("YYYY-MM-DD");

        for(var i =0; i<data.posts.length;i++){
          data.posts[i].posttime=moment(data.posts[i].posttime).format("LLL");
        }  
        res.render('totPost', {results:data});  //將資料傳給顯示頁面
    }else{
        res.render('notFound');  //導向找不到頁面
    } 
  })
});

//匯出
module.exports = router;