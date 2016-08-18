var buf = new Buffer(256);
var len = buf.write('www.runoob.com','utf8');
console.log(buf.toString('ascii'));
console.log(buf.toString('utf8'));
console.log(buf.toString('utf8',0,9));
console.log(buf.toString('utf8',2,9));
console.log(buf.toString('utf8',2,14));
console.log(buf.toString('utf8',2,258));
console.log('写入字节数：'+len);
console.log('buffer.lenght = '+buf.length);

console.log(buf.toJSON(buf));

var buf1=new Buffer('我是buf1内容');
var buf2=new Buffer('我是buf2内容');

var buf3=Buffer.concat([buf1,buf2]);
console.log('buf3 内容：'+buf3);
