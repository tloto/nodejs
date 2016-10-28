/*
 * App调用js函数以及参数
 JsFuncForAndroidIos(dict)
 
 dict：  {key：value}  
 参数备注：key、value 全为字符串
 
 app:   APP   固定APP表明是从app调用Html5
 code:  20001 隐藏导航栏，同时要返回给我是否有右侧按钮以及参数；20002 跳转原生界面（待考虑参数）
 
 */

function JsFuncForAndroidIos(dict){
    var dic= JSON.parse(dict);
    alert(dic);
    alert(dic.code);
    if(dict.code=='20001'){
        var title= document.getElementsByClassName('title')[0];
		title.style.display='none';
		var param={
			pageTitle:title.innerHTML,
			code:'10001',
			btnColor:'#0a0a0a',
			btnTilte:'按钮',
			btnClickFunc:'callAndroidIosFunc'
		}
    		AndroidAndIosObj.JsCallObjcFunc(JSON.stringify(param);
    }else if(dict.code=='20002'){
    	
    	
    }
    
}


/*
 js调用App函数以及参数
AndroidAndIosObj.JsCallObjcFunc(dict);
dict：  {key：value} 
 参数备注：key、value 全为字符串，code为10001时必选字段：btnColor、btnTilte、btnClickFunc
 
 pageTitle：导航栏名字
 code:  10001 显示右侧按钮；10002 无右侧按钮；10003 token过期或强制退出；
 btnColor:   #ffffff
 btnTilte:   按钮名字
 btnClickFunc: 按钮点击事件名称 例如 ‘callAndroidIosFunc’
 */

function callAndroidIosFunc(){
    var title= document.getElementsByClassName('title')[0];
    var colorValue=getStyle(title,'color')
	alert('我是按钮，哈哈😁'+rgb2hex(colorValue));
}








function getStyle(ele,key){
    var val=ele.style[key];
    if(!val){
        if(document.defaultView&&document.defaultView.getComputedStyle){
            var css=document.defaultView.getComputedStyle(ele,null);
            val=css.getPropertyValue(key);
        }else if(ele.currentStyle){
            val=ele.currentStyle[key];
        }
    }
    return val;
}
function zero_fill_hex(num, digits) {
  var s = num.toString(16);
  while (s.length < digits)
    s = "0" + s;
  return s;
}


function rgb2hex(rgb) {

  if (rgb.charAt(0) == '#')
    return rgb;
 
  var ds = rgb.split(/\D+/);
  var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
  return "#" + zero_fill_hex(decimal, 6);
}