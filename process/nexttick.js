function compute() {
  console.log('I am a compute method');
}
function somethingComplited(args) {
  console.log('I am a somethingComplited method');
  console.log(args);
}

// function doSomething(args,callback) {
//   somethingComplited(args);
//   callback();
// }


function doSomething(args,callback) {
  somethingComplited(args);
  process.nextTick(callback);//可以理解为异步回调
}


doSomething('12345',function OnEnd() {
  compute();
});
console.log('完啦');
