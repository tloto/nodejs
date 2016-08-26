var fs = require('fs');

fs.open('input.txt','r+',function(err,fd){
  if (err) {
    return console.log(err);
  }
  console.log('打开成功');
});

fs.stat('input.txt',function(err,status){
  if (err) {
       return console.error(err);
   }
   console.log(status);
   console.log("读取文件信息成功！");

   // 检测文件类型
   console.log("是否为文件(isFile) ? " + status.isFile());
   console.log("是否为目录(isDirectory) ? " + status.isDirectory());
});
