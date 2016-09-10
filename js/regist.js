// JavaScript Document
$(function () {

	$(".regist").eq(1).show().siblings().hide();
	$("#aside .regist:eq(0) ul li").eq(0).click(
		function(){
			$(".regist").eq(0).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(0) ul li").eq(1).click(
		function(){
			$(".regist").eq(2).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(2) ul li").eq(0).click(
		function(){
			$(".regist").eq(0).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(2) ul li").eq(1).click(
		function(){
			$(".regist").eq(2).show().siblings().hide();
		}
	);
	
	$("#aside .regist:eq(0) hgroup h5").click(
		function(){
			$(".regist").eq(1).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(2) hgroup h5").click(
		function(){
			$(".regist").eq(1).show().siblings().hide();
		}
	);
	
	$("#aside .regist:eq(1) ul li").eq(0).click(
		function(){
			$(".regist").eq(1).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(1) ul li").eq(1).click(
		function(){
			$(".regist").eq(3).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(3) ul li").eq(0).click(
		function(){
			$(".regist").eq(1).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(3) ul li").eq(1).click(
		function(){
			$(".regist").eq(3).show().siblings().hide();
		}
	);
	
	$("#aside .regist:eq(1) hgroup h6").click(
		function(){
			$(".regist").eq(0).show().siblings().hide();
		}
	);
	$("#aside .regist:eq(3) hgroup h6").click(
		function(){
			$(".regist").eq(0).show().siblings().hide();
		}
	);
	
})