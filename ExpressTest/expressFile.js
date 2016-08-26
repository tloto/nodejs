var express = require('express');
var app = express();
var fs = require('fs');

var multer= require('multer');

app.use(express.static('public'));
app.use(multer({dest:'/tmp/'}).array('image'));


app.get('/file.html',function(req,res){
  res.sendFile( __dirname +'/'+'fileupload.html');
})

app.post('/fileupload',function(req,res){
  console.log(req.files[0]);
  var des_file=__dirname +'/' +req.files[0].originalname;
  fs.readFile(req.files[0].path,function(err,data){
    fs.writeFile(des_file,data,function(err){
      if (err) {
        console.error(err);
      }else {
        response={
          message:'File uploaded successfully',
          filename:req.files[0].originalname
        };
        console.log(response);
        res.send(JSON.stringify(response));
      }
    });
  });
})

var server = app.listen(8081,function(){
  var host= server.address().address;
  var port= server.address().port;
  console.log('应用实例的访问地址为 http://%s:%s',host,port);
})
