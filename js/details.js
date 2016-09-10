// JavaScript Document
$(function () {

	$("#section > .contentbox .detailbox .detbox .decon").eq(0).show().siblings().hide();
	$("#section > .contentbox .detailbox .detail h6").click(
		function(){
			$("#section > .contentbox .detailbox .more").show();
			$("#section > .contentbox .detailbox .detbox .decon").eq(1).show().siblings().hide();
			$("#section > .contentbox .detailbox > ul li:eq(1)").addClass("currentstyle").siblings().removeClass("currentstyle");
		}
	);
	
	$("#section > .contentbox .detailbox > ul li").click(
		function(){
			$("#section > .contentbox .detailbox .detbox .decon").eq($(this).index()).show().siblings().hide();
			$(this).addClass("currentstyle").siblings().removeClass("currentstyle");
		}
	);
	
	$("#section > .contentbox .detailbox .reviews .navbox li").click(
		function(){
			$(this).addClass("currentcolor").siblings().removeClass("currentcolor");
		}
	);
	
	
	
	var n = 0;
	$("#section > .contentbox .leftbox .imgbox .imgbigbox").width(60*$("#section > .contentbox .leftbox .imgbox .imgbigbox .img").length);
	$("#section > .contentbox .leftbox .ctrlleft").click(
		function(){
			if(n<$("#section > .contentbox .leftbox .imgbox .imgbigbox .img").length-5){
				n = n+1;
			}
			$("#section > .contentbox .leftbox .imgbox .imgbigbox").animate({marginLeft:-60*n});
		}
	);
	$("#section > .contentbox .leftbox .ctrlright").click(
		function(){
			if(n>0){
				n = n-1;
			}
			$("#section > .contentbox .leftbox .imgbox .imgbigbox").animate({marginLeft:-60*n});
		}
	);
	
	$("#section > .contentbox .asidebox .look .lb").height(202*$("#section > .contentbox .asidebox .look .lb figure").length);
	$("#section > .contentbox .asidebox .look .img img:eq(0)").click(
		function(){
			if(n<$("#section > .contentbox .asidebox .look .lb figure").length-4){
				n = n+1;
			}
			$("#section > .contentbox .asidebox .look .lb").animate({marginTop:-202*n});
		}
	);
	$("#section > .contentbox .asidebox .look .img img:eq(1)").click(
		function(){
			if(n>0){
				n = n-1;
			}
			$("#section > .contentbox .asidebox .look .lb").animate({marginTop:-202*n});
		}
	);
	$("#section > .contentbox .asidebox .look .lb figure").mouseenter(
		function(){
			$(this).css("background-color","rgba(0,0,0,0.1)");
		}
	).mouseleave(
		function(){
			$(this).css("background-color","rgba(0,0,0,0)");
		}
	);
	
	$("#section > .contentbox .recom .figbigbox").width(198*$("#section > .contentbox .recom .figbigbox figure").length);
	var t = setInterval(function(){
		$("#section > .contentbox .recom .figbigbox").animate({marginLeft:-198},3000,function(){
			$("#section > .contentbox .recom .figbigbox figure:last").after($("#section > .contentbox .recom .figbigbox figure:first"));
			$("#section > .contentbox .recom .figbigbox").css({marginLeft:0});
		});
	},5000);
	$("#section > .contentbox .recom .figbox").mouseenter(
		function(){
			clearInterval(t);
		}
	).mouseleave(
		function(){
			t = setInterval(function(){
				$("#section > .contentbox .recom .figbigbox").animate({marginLeft:-198},2000,function(){
					$("#section > .contentbox .recom .figbigbox figure:last").after($("#section > .contentbox .recom .figbigbox figure:first"));
					$("#section > .contentbox .recom .figbigbox").css({marginLeft:0});
				});
			},3000);
		}
	);
	
	$("#section > .contentbox .centerbox .color span").click(
		function(){
			$(this).toggleClass("bgcolor").siblings().removeClass("bgcolor");
		}
	);

})


