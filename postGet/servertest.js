var http = require('http');
var fs = require('fs');
var url=require('url');

http.createServer(function(request,response){
  var pathname=url.parse(request.url).pathname;

  // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});

         // 响应文件内容
         response.write(data.toString());
      }
      //  发送响应数据
      response.end();
   });   

}).listen(8081);
