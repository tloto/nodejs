// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var connectHandler = function (){
  console.log('链接成功');
  //触发 data_received 事件
  eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function (arguments) {
  console.log('数据接收成功');
});
//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行结束');

// 5s后
setTimeout(function(){
  eventEmitter.emit('connection');
},5000);
