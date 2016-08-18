
// nodejs配置环境地址
// http://www.tuicool.com/articles/mMr2ma


var http = require('http');

http.createServer(function (request, response) {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 阻塞文件读取
var fs=require("fs");
var data = fs.readFileSync('input.txt');
console.log("阻塞文件内容："+data.toString());
console.log('程序结束1');

// 非阻塞文件读取
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log('非阻塞文件读取内容：' + data.toString());
});

console.log("程序执行结束!");
