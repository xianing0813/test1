//功能：发送ajax请求，获取数据

//参数：
//请求方式
//请求的地址
//请求参数
//是否异步
//回调函数

function ajax1810(method,url,param,isAsync,func){
	// 1、
	let xhr = new XMLHttpRequest();

	//2、
	let urlAndParam=url;
	if(method.toLowerCase()=="get"){
		urlAndParam+="?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);

	//3、
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4  && xhr.status==200){
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}

//参数：用对象的方式，并且使用默认值
//请求方式
//请求的地址
//请求参数
//是否异步
//回调函数

function ajax1810ByObj(obj){
	let defaultObj = {
		"method":"get",
		"url":"#",
		"param":"",
		"isAsync":true,
		"func":null
	}
	for(let key in defaultObj){
		if(!obj[key]){
			obj[key] = defaultObj[key];
		}
	}
	// 1、
	let xhr = new XMLHttpRequest();

	//2、
	let urlAndParam=obj.url;
	if(obj.method.toLowerCase()=="get"){
		urlAndParam+="?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);

	//3、
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4  && xhr.status==200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}


