var express = require('express');
var app = express();
var bodyparser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyparser.urlencoded({extended:false});

app.get('/index.html',function(req,res){
  res.sendFile(__dirname +'/'+'index.html');
})
app.get('/process_get',function(req,res){
  response={
    firstName:req.query['first_name'],
    lastName:req.query['last_name']
  }
  res.send('hello get'+JSON.stringify(response));
})


app.post('/process_post',urlencodedParser,function(req,res){
  response={
    firstName:req.body['first_name'],
    lastName:req.body['last_name']
  }
  res.send('hello post'+JSON.stringify(response));
})



var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().address
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
