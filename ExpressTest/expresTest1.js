var express=require('express');
var app=express();
app.get('/',function(req,res){
  console.log('主页get请求');
  res.send('Hello Get');
})
app.post('/',function(req,res){
  console.log('主页post请求'+req);
  res.send('Hello Post');
})
app.get('/del_user',function(req,res){
  console.log('/del_user 响应 DELETE 请求');
  res.send('删除页面');
})
app.get ('/list_user',function(req,res){
  console.log('list_user 请求');
  res.send('用户列表页');
})
app.get('ab*cd',function(req,res){
  console.log('ab*cd 请求');
  res.send('正则匹配');
})
var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().address
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
