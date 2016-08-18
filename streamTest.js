var fs = require('fs');
var data='';

//创建可读流
var readerStream=fs.createReadStream('input.txt');

//设置编码
readerStream.setEncoding('utf8');

//处理流事件 -->data , end , error
readerStream.on('data', function (arguments) {
  data+=arguments;
});
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('error', function (err) {
  console.error(err);
});

var data1='内容写到 output.txt 文件啦，哦也，你想干啥';

var writerStream=fs.createWriteStream('output.txt');
writerStream.write(data1,'utf8');
//
writerStream.end('\n');
writerStream.on('finish', function () {
  console.log('写入完成。');
});
writerStream.on('error', function (err) {
  console.error(err);
});

console.log('程序执行完毕');


// 管道流
// readerStream.pipe(writerStream); //把readerStream 内容写入到 writerStream
