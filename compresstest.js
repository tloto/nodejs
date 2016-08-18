var fs = require('fs');
var zlib = require('zlib');

//压缩 input.txt 文件为 input。txt.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('压缩完成');

//解压
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input1.txt'));
// console.log('解压完毕');
