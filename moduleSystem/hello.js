// 模块最终取决于module.export
// exports. 也是调用的module。export


exports.world=function(){

  console.log('hello world');

}


function MyHello(){
  var name='';
  this.setName=function(thyName){
    name = thyName;
  }
  this.sayHello=function(){
    console.log('hello'+name);
  }
}
module.exports=MyHello;
