var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function (req,res) {
  var post='';
  req.on('data', function (chunk) {
    post+=chunk;
    console.log('data:'+post);
  });
  req.on('end', function () {
    post = querystring.parse(post);
    res.end(util.inspect(post));
    console.log(util.inspect(post)+'安慰福');
  });
}).listen(3000);
