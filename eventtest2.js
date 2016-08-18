var events = require('events');
var eventsEmitter= new events.EventEmitter();

//监听器1
var listener1 = function listener1(item){
  console.log(item+ ':监听器 listner1 执行。');
}
//监听器2
var listener2 = function listener2(item){
  console.log(item+':监听器 listener2 执行。');
}

// 绑定connection事件，处理函数为 listener1
eventsEmitter.addListener('connection',listener1);
eventsEmitter.on('connection',listener2);

var eventlistenerArr = eventsEmitter.listeners('connection');//返回监听器数组
console.log(eventlistenerArr.length+'监听器监听连接事件。');

//connection事件处理
eventsEmitter.emit('connection','hello,I am item');

eventsEmitter.removeListener('connection',listener1);
console.log('listener1 不在受监听');

eventsEmitter.emit('connection');

eventlistenerArr = eventsEmitter.listeners('connection');//返回监听器数组
console.log(eventlistenerArr.length+'监听器监听连接事件。');

console.log('程序执行完毕');
