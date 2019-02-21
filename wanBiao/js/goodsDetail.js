window.onload=function(){
//叉号删除顶部	
	$(".delete").click(function(){
		$(".headerT").slideUp(1000);
	})

//导航中点击后出现的对话框
let count01=0;
$(".nav_center_right").click(function(){
	count01++;
	if(count01!=0){
		$(".chartbox").css({"display":"block"});
	}	
})
//点击对话框消失
$(".chartbox_who_button").children().last().click(function(){
	$(".chartbox").css({"display":"none"});
})

$(".chartbox_who_button").children().first().click(function(){
	$(".chartbox").css({"display":"none"});
	$(".chartbox_small").css({"display":"block"});

})

$(".chartbox_who_button").children().eq(1).click(function(){
	$(".chartbox").css({"display":"none"});
	$(".chartbox_big").css({"display":"block"});

})	

//获取后端数据放在指定区域
$.ajax({
		url:"getGoodsInfo.php",
		type:"REQUEST",
		dataType:"json",
		async:true,
		data:{},
		success:function(data){
			console.log("-----success-----");
			console.log(data);
			console.log(typeof(data));
			for(let i=0;i<data.length;i++){
					let str="<div class='goods_right_title'>"+data[i].goodsName+"</div>\
					";
				$('.goods_right').prepend(str);
			}

		},
		error:function(data){
			console.log("------error------");
			console.log(data);
		}

	});




















//更多效果jQuery实现
	$("#more").click(function(){
		$(".footer_middle_bottom").slideToggle(1000);
	});
















}

