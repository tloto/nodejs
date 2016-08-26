
var express= require('express');
var app = express();
var fs = require('fs');

app.get ('/listUsers',function(req,res){
  fs.readFile(__dirname+'/'+'users.json','utf8',function(err,data){
    if (err) {
      console.error(err);
    }else {

      var users = JSON.parse(data);

      users['user4']={
       "name" : "rameshasdf",
   	  "password" : "password4",
   	  "profession" : "clerk",
   	  "id": 4
      }

      console.log(users);
      delete users['user4'];
      console.log(users);
      res.end(JSON.stringify(users));
    }
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
