
window.onload=function(){
	//叉号删除顶部	
	$(".delete").click(function(){
		$(".headerT").slideUp(1000);
	})

	//更多效果jQuery实现
	$("#more").click(function(){
		$(".footer_middle_bottom").slideToggle(1000);
	});

	// 连接收据库
	ajax1810ByObj({
			"url":"getGoodsList.php",
			"param":"phone="+this.value,
			"func":phoneData
		});

	



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