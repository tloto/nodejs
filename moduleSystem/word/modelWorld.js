function helloWorld() {
  var name;
  this.setName=function(thyName) {
    name=thyName;
  };
  this.getName=function() {
    console.log(name);
  };
}

// exports.hello=helloWorld;
// 这种暴露用法；较为麻烦
// var hello = require('./modelWorld').hello;
// var modelworld= new hello();
// modelworld.setName('hello modelworld');
// modelworld.getName();


module.exports = helloWorld;
