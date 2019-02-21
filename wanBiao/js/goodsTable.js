
window.onload=function(){
	//叉号删除顶部	
	$(".delete").click(function(){
		$(".headerT").slideUp(1000);
	})
	// 表友晒单效果
	$(".watchFriend_top").delegate("span","hover",function(){
		$(".watchFriend_top span:first").mouseover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".watchFriend_top span:last").css({"color":"#999999","font-weight":"100"});
			$(".shineWatch_bottom").css({"opacity":"1"});
			$(".watchFriend_talk").css({"opacity":"0"});
		})
		$(".watchFriend_top span:last").mouseover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".watchFriend_top span:first").css({"color":"#999999","font-weight":"100"});
			$(".watchFriend_talk").css({"opacity":"1"});
			$(".watchFriend_shine").css({"opacity":"0"});
		})


		$(".watchFriend_top span:first").mouseout(function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".shineWatch_bottom").css({"opacity":"1"});
			$(".watchFriend_talk").css({"opacity":"0"});
			$(".watchFriend_top").mouseout(function(){
				$(".watchFriend_top span:first").css({"color":"#666666","font-weight":"700"});
				$(".watchFriend_top span:last").css({"color":"#999999","font-weight":"100"});
			});
		})

		
		$(".watchFriend_top span:last").mouseout(function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".watchFriend_talk").css({"opacity":"1"});
			$(".watchFriend_shine").css({"opacity":"0"});
			$(".watchFriend_top").mouseout(function(){
				$(".watchFriend_top span:last").css({"color":"#666666","font-weight":"700"});
				$(".watchFriend_top span:first").css({"color":"#999999","font-weight":"100"});
			});
		})

	});	

	//品牌资讯效果
	
	$(".news_top span:nth-child(1)").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(3)").css({"color":"#999999","font-weight":"100"});
			$(".news_pinpai").css({"opacity": "1"});
			$(".news_watch").css({"opacity": "0"});
			$(".news_wangzhan").css({"opacity": "0"});

		},function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(3)").css({"color":"#999999","font-weight":"100"});

			$(".news_top").mouseout(function(){
				$(".news_top span:nth-child(1)").css({"color":"#666666","font-weight":"700"});
				$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
				$(".news_top span:nth-child(3)").css({"color":"#999999","font-weight":"100"});
				$(".news_pinpai").css({"opacity": "1"});
				$(".news_watch").css({"opacity": "0"});
				$(".news_wangzhan").css({"opacity": "0"});
			});
		})
	});

	$(".news_top span:nth-child(2)").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".news_top span:nth-child(1)").css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(3)").css({"color":"#999999","font-weight":"100"});
			$(".news_pinpai").css({"opacity": "0"});
			$(".news_watch").css({"opacity": "1"});
			$(".news_wangzhan").css({"opacity": "0"});

		},function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".news_top").mouseout(function(){
				$(".news_top span:nth-child(2)").css({"color":"#666666","font-weight":"700"});
				$(".news_top span:nth-child(1)").css({"color":"#999999","font-weight":"100"});
				$(".news_top span:nth-child(3)").css({"color":"#999999","font-weight":"100"});
				$(".news_pinpai").css({"opacity": "0"});
				$(".news_watch").css({"opacity": "1"});
				$(".news_wangzhan").css({"opacity": "0"});
			});
		})
	});

	$(".news_top span:nth-child(3)").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".news_top span:nth-child(1)").css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
			$(".news_pinpai").css({"opacity": "0"});
			$(".news_watch").css({"opacity": "0"});
			$(".news_wangzhan").css({"opacity": "1"});

		},function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(1)").css({"color":"#999999","font-weight":"100"});
			$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
			$(".news_top").mouseout(function(){
				$(".news_top span:nth-child(3)").css({"color":"#666666","font-weight":"700"});
				$(".news_top span:nth-child(1)").css({"color":"#999999","font-weight":"100"});
				$(".news_top span:nth-child(2)").css({"color":"#999999","font-weight":"100"});
				$(".news_pinpai").css({"opacity": "0"});
				$(".news_watch").css({"opacity": "0"});
				$(".news_wangzhan").css({"opacity": "1"});
			});
		})
	});

/*
//jQuery添加class来实现
	$(".news_top span").hover(function(){
		$(this).addClass("selected1");
		// $(".news_content_big div").addClass("selected2");
		$(".selected1").hover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
		},function(){
			$(this).css({"color":"#999999","font-weight":"100"});
		});
	},function(){
		
		// $(".news_content_big div").removeClass("selected2");
		$(".news_top").mouseout(function(){
			$(".selected1").css({"color":"#666666","font-weight":"700"});
		});
		$(this).removeClass("selected1");
	});
*/
/*//jQuery添加setAttribute来实现
	let news_contentDoms=$$(".news_content");
	$(".news_top span").mouseover(function(){
		$(this).addClass("selected1");
		for(let i=0;i<news_contentDoms.length;i++){
			news_contentDoms[i]
		}
		this.setAttribute("index","i");
		$(".news_content_big div")[i].addClass("selected2");
		$(".selected1").hover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
		},function(){
			$(this).css({"color":"#999999","font-weight":"100"});
		});
	},function(){
		
		// $(".news_content_big div").removeClass("selected2");
		$(".news_top").mouseout(function(){
			$(".selected1").css({"color":"#666666","font-weight":"700"});
		});
		$(this).removeClass("selected1");
	});
*/

// 热词效果//有问题
/*
	$(".hot_top").delegate("span","hover",function(){
		$(".hot_top span:first").mouseover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".hot_top span:last").css({"color":"#999999","font-weight":"100"});
			$(".hot_pinpai").css({"opacity":"1"});
			$(".hot_word").css({"opacity":"0"});
		})
		$(".hot_top span:last").mouseover(function(){
			$(this).css({"color":"#666666","font-weight":"700"});
			$(".hot_top span:first").css({"color":"#999999","font-weight":"100"});
			$(".hot_word").css({"opacity":"1"});
			$(".hot_pinpai").css({"opacity":"0"});
		})


		$(".hot_top span:first").mouseout(function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".shineWatch_bottom").css({"opacity":"1"});
			$(".hot_word").css({"opacity":"0"});
			$(".hot_top").mouseout(function(){
				$(".hot_top span:first").css({"color":"#666666","font-weight":"700"});
				$(".hot_top span:last").css({"color":"#999999","font-weight":"100"});
			});
		})

		
		$(".watchFriend_top span:last").mouseout(function(){
			$(this).css({"color":"#999999","font-weight":"100"});
			$(".hot_word").css({"opacity":"1"});
			$(".hot_pinpai").css({"opacity":"0"});
			$(".hot_top").mouseout(function(){
				$(".hot_top span:last").css({"color":"#666666","font-weight":"700"});
				$(".hot_top span:first").css({"color":"#999999","font-weight":"100"});
			});
		})

	});	

*/
// 右边效果点击更多更少效果
	let count01=0;
	$(".moreButton").click(function(){
		$(".searchTable_bottom").slideToggle();
		count01++;
		if(count01%2!=0){
			$(".moreButton").html("收起>");
		}else{
			$(".moreButton").html("更多>");
		}
		
	});

 // 品牌 
 	$(".moreTrue3").click(function(){
 		$(".searchTable_top_list2").css({"display":"block"});
 		$(".searchTable_top_list3").css({"display":"none"});
 		
 	})
 	$(".moreTrue4").click(function(){
 		$(".searchTable_top_list2").css({"display":"none"});
 		$(".searchTable_top_list3").css({"display":"block"});
 	})

// 宽度
	$(".moreTrue5").click(function(){
 		$(".searchTable_top_width2").css({"display":"block"});
 		$(".searchTable_top_width1").css({"display":"none"});
 		
 	})
 	$(".moreTrue6").click(function(){
 		$(".searchTable_top_width2").css({"display":"none"});
 		$(".searchTable_top_width1").css({"display":"block"});
 	})
// 长度
$(".moreTrue7").click(function(){
 		$(".searchTable_top_length2").css({"display":"block"});
 		$(".searchTable_top_length1").css({"display":"none"});
 		
 	})
 	$(".moreTrue8").click(function(){
 		$(".searchTable_top_length2").css({"display":"none"});
 		$(".searchTable_top_length1").css({"display":"block"});
 	})
// 颜色
$(".moreTrue9").click(function(){
 		$(".searchTable_top_color2").css({"display":"block"});
 		$(".searchTable_top_color1").css({"display":"none"});
 		
 	})
 	$(".moreTrue10").click(function(){
 		$(".searchTable_top_color2").css({"display":"none"});
 		$(".searchTable_top_color1").css({"display":"block"});
 	})
// 列表选项导航
let count02=0;
$(".selectTable_nav .list ul li span").click(function(){
	count02++;
	if(count02%2!=0){
		$(this).css({"border":"1px solid transparent"});
	}else{
		$(this).css({"border":"1px solid #cccccc"});
	}	
});

// 页数
$(".pageNum_a").children("a").each(function(){
	$(this).hover(function(){
		$(this).css({"background":"#cc9952",
	"color":"white"});
		$(this).siblings().css({"background":"white",
	"color":"#999999"});
	});
})

$(".pageNum_a").children("a").each(function(){
	$(this).click(function(){
		$(this).css({"background":"#666666",
	"color":"#ffffff"});
		$(this).siblings().css({"background":"white",
	"color":"#999999"});
	});
})
//商品列表点击更多效果
let count03=0;
$("#moreWord_more").click(function(){
	count03++;
	$(this).parent().nextAll().last().toggle();	
	if(count03%2!=0){
		$(this).html("-更多");
	}else{
		$(this).html("+更多");
	}
})
//另一种获取元素的方法
// $("#moreWord_more").click(function(){
	// $(this).css({"color":"red"});
	// $(this).parent().css({"background":"red"});
	// console.log($(this).parent().parent().children().last().css({"display":"none"}));
// })

/*
$("#moreWord_more").each(function(){
	console.log("1"+$("#moreWord_more"));
	$(this).click(function(){
		console.log("2"+$(this));
		let count03=0;
		$(this).parent().nextAll().last().toggle();
		console.log("3"+$(this).parent().nextAll().last().toggle());
		if(count03%2!=0){
			$(this).html("-更多");
			}else{
				$(this).html("+更多");
			}
	})
})
*/

//获取后端数据放在指定区域
	$.ajax({
		url:"getGoodsList.php",
		type:"GET",
		dataType:"json",
		async:true,
		data:{},
		success:function(data){
			console.log("-----success-----");
			console.log(data);
			console.log(typeof(data));
			for(let i=0;i<data.length;i++){
					let str="<li id = '"+data[i].goodsId+"'>\
						<a href='javascript:;'><img src='"+data[i].goodsImg+"' alt=''></a>\
						<div class='goodsTable_text'>\
							<span class='goodsTable_text_span01'><span>￥</span>"+data[i].goodsPrice+"<b><span>￥</span>"+data[i].beiyong2+"</b></span>\
							<a class='goodsTable_text_a01' href='javascript:;'>"+data[i].goodsName+"</a>\
							<span class='goodsTable_text_span02'><span>销量</span>"+data[i].goodsCount+"</span>\
							<a class='goodsTable_text_a02' href='javascript:;'>"+data[i].beiyong2+"</a>\
							<span class='goodsTable_text_span03'>"+data[i].beiyong3+"</span>\
						</div>\
						<div class='goodsTable_hover'>\
							\
						</div>\
					</li>\
					\
					";
				$('#goodsTable_ul').append(str);
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