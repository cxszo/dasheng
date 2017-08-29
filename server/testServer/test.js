var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);



if(typeof api_user == 'string'){
    res.contentType('json');
    res.send({
        code: ResCode.nofound.c,
        desc: api_user
    });
    return false;
}

let user_id = api_user.user_id || '';
BlogNote.find({user_id}, '-_id id name seq createAt is_show')
.sort({seq: 1})
.exec((err, _data)=>{
    if(err)console.log(err);

    res.contentType('json');
    res.send({
        code: ResCode.success.c,
        data: _data,
        desc: ResCode.success.d
    });
    return false;
})




// 5.2写-排序文集、文章
router.post('/note/note_sort', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.3写-拿文集id查文章列表

router.post('/note/articlelist', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.4写-拿文章id查文章
router.post('/note/article', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.5写-删除,新建,重命名文集
router.post('/note/act', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.6写-删除, 取消发布, 恢复， 彻底删除
router.post('/note/article/act', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.7写-发布文章，保存文章
router.post('/article/save', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.8写-新增文章
router.post('/note/article/create', $middlewares, (req, res)=>{
  var api_user = req.api_user || '';//本人的登录信息
  var {note_id, seq_in_nb, title} = req.body || '',
  note_id = note_id || '',
  seq_in_nb = seq_in_nb || '',
  title = title || '';


  if(typeof api_user == 'string'){
      res.contentType('json');
      res.send({
          code: ResCode.nofound.c,
          desc: api_user
      });
      return false;
  }
  if(!note_id || !seq_in_nb ){
      res.contentType('json');
      res.send({
          code: ResCode.error.c,
          desc: '请传入note_id和seq_in_nb'
      });
      return false;
  }   

  



  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})
// 5.9写-设置文章标签
router.post('/note/article/settag', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})

// 6.1查询回收站列表
router.post('/note/dustbin', (req, res)=>{
  res.contentType('json');
  res.send({
      code: ResCode.success.c,
      desc: ResCode.success.d
  });
  return false;
})