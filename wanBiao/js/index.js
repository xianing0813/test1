//轮播图效果
let myTimer = null;
let currIndex = 0;
 var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.1000phone.com","http://www.163.com"];
//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//一、数据处理
		let outIndex = currIndex;
		currIndex=currIndex+1;
		if(currIndex>=6){
			currIndex=0;
		}
		//二、外观呈现
		showImg(outIndex,currIndex);
	},800);
}
//停止播放	
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}
//跳转到对应的图片上
function goImg(index){
	//一、数据处理
	let outIndex = currIndex;
	currIndex = index;
	if(currIndex>=6 || currIndex<0){
		currIndex=0;
	}
	//二、外观呈现
	showImg(outIndex,currIndex);
}
//显示指定的图片
function showImg(outOrd,inOrd){
	if(outOrd==inOrd){
		return;
	}
	//1、改图片
	//一个淡入，一个淡出
	let imgDoms=$$("#box").children;
	fadeInOut(imgDoms[outOrd],800,imgDoms[inOrd]);
	//2、改豆豆
	let liDoms = $$("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.cssText = `background:transparent;
									height:6px;
									width:6px;
									border:2px solid #dfb9a4;
									left:0px;
									top:2px;`;				
	}
	liDoms[inOrd].style.cssText = `background:white;
									height:8px;
									width:8px;
									border:3px solid #ccaa7a;
									left:0px;
									top:0px;`;
	}
//窗口失焦轮播图闪问题的解决
window.onblur = function(){
	stopPlay();
}

window.onfocus = function(){
	autoPlay();
}


//滚动出现的导航
window.onscroll=function(){
	let scroll=document.body.scrollTop||document.documentElement.scrollTop;
	if(scroll>=400){
		// $$(".scrollShow").style.display="block";
		$$("#scrollShow").style.position="fixed";
		$$("#scrollShow").style.top="0px";

	}else{
		$$("#scrollShow").style.position="absolute";
		$$("#scrollShow").style.top="40px";
	}	
}


window.onload = function(){
	//叉号删除顶部	
var remove=$(".delete").click(function(){
		$(".headerT").slideUp(1000);
	});
if(remove){
		window.onscroll=function(){
		let scroll=document.body.scrollTop||document.documentElement.scrollTop;
		if(scroll>=143){
			$$("#scrollShow").style.display="block";
			$$("#scrollShow").style.position="fixed";
			$$("#scrollShow").style.top="0px";

		}else{
			$$("#scrollShow").style.position="absolute";
			$$("#scrollShow").style.display="none";
			$$("#scrollShow").style.top="40px";
		}	
	}
}else{
		window.onscroll=function(){
		let scroll=document.body.scrollTop||document.documentElement.scrollTop;
		if(scroll>=203){
			$$("#scrollShow").style.display="block";
			$$("#scrollShow").style.position="fixed";
			$$("#scrollShow").style.top="0px";

		}else{
			$$("#scrollShow").style.position="absolute";
			$$("#scrollShow").style.display="none";
			$$("#scrollShow").style.top="40px";
		}	
	}
}	

	// 注册登录中god效果
/*
	//jQuery写法
	$("#god_a").hover(
		function(){
			$(this).css({"border":"1px solid #666","text-decoration":"none","border-bottom":"none","background":"white","box-sizing": "border-box"});
			$("#god").slideDown(function(){
				$("#god").mouseover(function(){
					$("#god_a").css({"border":"1px solid #666","text-decoration":"none","border-bottom":"none","background":"white","box-sizing": "border-box"});
					$("#god").css({"display":"block"});
			});
				
				$("#god").mouseout(function(){
					$("#god_a").css({"border":"none","background":"#f4f4f4"});
					$("#god").css({"display":"none"});
			
			});
					});
	},function(){
			$(this).css({"border":"none","background":"#f4f4f4"});
			$("#god").slideUp();
	});
*/
	
	
//js原生写法
	$$("#god_a").onmouseover=function(){
		$$("#god_a").style.cssText=`border:1px solid #666;
									border-bottom:none;
									background:white;
									text-decoration:none;
									box-sizing:border-box;`;
		var god=$("#god").slideDown();
		if(god){
			$$("#god").onmouseover=function(){
				$$("#god_a").style.cssText=`border:1px solid #666;
											border-bottom:none;
											background:white;
											text-decoration:none;
											box-sizing:border-box;`;
				$$("#god").style.display="block";
			};
			$$("#god").onmouseout=function(){
				$$("#god_a").style.cssText=`border:none;
											background:#f4f4f4;`;
				$$("#god").style.display="none";
			};
		}
	}
	$$("#god_a").onmouseout=function(){
		$$("#god_a").style.cssText=`border:none;
									background:#f4f4f4;`;
		$("#god").slideUp();
	}


	//轮播图效果
	autoPlay();
	let liDoms = $$("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		//绑定了事件
		liDoms[i].onclick = function(event){
			let evt = event || window.event;
			// console.log(i);
			// goImg(i);//循环的时候，不会调用goImg();
			goImg(this.getAttribute("index"));
			evt.stopPropagation();
		}
	}
	$$("#box").onclick = function(){
		location.href = arr[currIndex];
	}

//视频播放处效果
$(".spanvideo02").click(function(){
	$("#videosor").attr({"controls":"controls","autoplay":"autoplay"});	
	$(".spanvideo02").removeClass();
	$(".spanvideo01").removeClass();
})


//商品列表划过效果
let out_brandDoms = document.getElementsByClassName("out_brand");
console.log(typeof(out_brandDoms));
let brandsDoms = document.getElementsByClassName("brand_out");
console.log(typeof(brandsDoms));
let shulineDoms = document.getElementsByClassName("shuline");
for(let i=0;i<brandsDoms.length;i++){
		brandsDoms[i].onmouseover = function(){			
					brandsDoms[i].style.backgroundColor="white";
					out_brandDoms[i].style.display="block";
					out_brandDoms[i].style.zIndex="4";
					shulineDoms[i].style.display="block";
					out_brandDoms[i].onmouseover=function(){
						out_brandDoms[i].style.display="block";
						out_brandDoms[i].style.zIndex="4";
						brandsDoms[i].style.backgroundColor="white";
						shulineDoms[i].style.display="block";
					}
					out_brandDoms[i].onmouseout=function(){
						brandsDoms[i].style.backgroundColor="#fbf7f5";
						out_brandDoms[i].style.display="none";
						out_brandDoms[i].style.zIndex="0";
						shulineDoms[i].style.display="none";
					}				
			}								
		brandsDoms[i].onmouseout = function(){			
					brandsDoms[i].style.backgroundColor="#fbf7f5";
					out_brandDoms[i].style.display="none";
					out_brandDoms[i].style.zIndex="0";
					shulineDoms[i].style.display="none";
					
			}		
		
	}

//商品列表中间部分的划过效果
	$(".imgbox a").hover(
		function(){
			$(this).children("span").css({"display":"block"})
		},
		function(){
			$(this).children("span").css({"display":"none"})
		}
	)
//限时购倒计时效果
function deadTime(str){
	//str传入参数：表示天数。
		var totle = parseInt(str*24*60*60);
		

	var mytime2 = setInterval(function(){
		var day=parseInt(totle/60/60/24);
		var hour=parseInt((totle/60/60)%24);

		var minite=parseInt(totle/60)%60;

		var second=totle%60;							
			if(totle==0){
				$$("#deadtime_box").innerHTML="敬请期待下次限时活动";
				clearInterval(mytime2);
			}	

			$$("#day").innerHTML=day;
			$$("#hour").innerHTML=hour;
			$$("#minite").innerHTML=minite;
			$$("#second").innerHTML=second;

	totle--;
	},1000);
}

   deadTime(5);
	
/*
let brandsDoms = document.getElementsByClassName("brand_out");
for(let i=0;i<brandsDoms.length;i++){
		brandsDoms[i].onmouseover = function(){			
					brandsDoms[i].style.backgroundColor="white";
					$$("#out_brand").style.display="block";
					$$("#shuline").style.display="block";											
			}						
		
		brandsDoms[i].onmouseout = function(){			
					brandsDoms[i].style.backgroundColor="#fbf7f5";
					$$("#out_brand").style.display="none";	
					$$("#shuline").style.display="none";									
			}						
		
	}	

*/

	//达人甄选箭头效果
	// let four_pointLiDoms=$$(".four_point").children;
	// for(let i=0;i<four_pointLiDoms.length;i++){
	// 	four_pointLiDoms[i].onmouseover=function(){
	// 		let spanDoms=four_pointLiDoms[i].children;
	// 		spanDoms.style.display="block";
	// 	}
	// 	four_pointLiDoms[i].onmouseover=function(){
	// 		let spanDoms=four_pointLiDoms[i].children;
	// 		spanDoms.style.display="none";
	// 	}
	// }


	//排行榜最右边划过效果
	// let oRliDoms=$$("#order_right_imgs").children;
	// for(let i=0;i<oRliDoms.length;i++){
	// 	oRliDoms[i].onmouseover=function(){
	// 		let smallBoxDoms=oRliDoms[i].children;
	// 		smallBoxDoms[1].style.display="block";
	// 		smallBoxDoms[1].style.transform="translateY(0px)";
	// 	}
	// 	oRliDoms[i].onmouseout=function(){
	// 		let smallBoxDoms=oRliDoms[i].children;
	// 		smallBoxDoms[1].style.transform="translateY(-61px)";
	// 		smallBoxDoms[1].style.display="none";
	// 	}
	// }



	//品牌馆
	let pinPaiLiDoms=$$("#pinpai_bottom_imgs").children;
	for(let i=0;i<pinPaiLiDoms.length;i++){
		pinPaiLiDoms[i].onmouseover=function(){
			let spanDoms=pinPaiLiDoms[i].children;
			spanDoms[1].style.opacity=1;
		}
		pinPaiLiDoms[i].onmouseout=function(){
			let spanDoms=pinPaiLiDoms[i].children;
			spanDoms[1].style.opacity=0;
		}
	}
	//更多效果实现
	/*
	let ord=0;
	$$("#more").onclick=function(){
		ord++;
		if(ord%2==0){
			$$("#footer_middle_bottom").style.display="none";
		}else{
			$$("#footer_middle_bottom").style.display="block";
		}		
	}
	*/

	//jQuery实现
	$("#more").click(function(){
		$(".footer_middle_bottom").slideToggle(1000);
	})

}

//$$函数
function $$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
 }	


	



