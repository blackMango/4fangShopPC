// JavaScript Document
$(function () {

	$("#section > #nav > .nav .asidecont .aside00").hide();
	
	$("#section > #nav #aside figure").click(
		function(){
			$(this).toggleClass("bgcolor").siblings().removeClass("bgcolor");
			$("#section > #nav > .nav .asidecont .aside00").eq($(this).index()).toggle().siblings().hide();
		}
	);
	var i = 1;
	var size = $("#section .banner .bannerbox .photobox img").length;
	var t = setInterval (move,3000);
	function move (){
		i++;
		if(i == size){
			i = 0;
		}
		$("#section .banner .bannerbox .photobox img").eq(i).show().siblings().hide();
		$("#section .banner .ctrlboxsmall .ctrl").eq(size-1-i).addClass("current").siblings().removeClass("current");
	}
	
	$("#section .banner .bannerbox .photobox img").eq(0).show().siblings().hide();
	$("#section .banner .ctrlboxsmall .ctrl").mouseenter(
		function(){
			$(this).addClass("current").siblings().removeClass("current");
			$("#section .banner .bannerbox .photobox img").eq($(this).index()).show().siblings().hide();
		}
	);
	
	$("#section .today .tbox .todaybox").eq(0).show().siblings().hide();
	$("#section .today .title h2").click(
		function(){
			$(this).addClass("current-color").siblings().removeClass("current-color");
			$("#section .today .tbox .todaybox").eq($(this).index()).show().siblings().hide();
		}
	);
	$("#section .today figure").mouseenter(
		function(){
			$(this).addClass("figbgcolor");
		}
	).mouseleave(
		function(){
			$(this).removeClass("figbgcolor");
		}
	);
	
	$("#section > #nav > .nav #aside").mouseenter(
		function(){
			$("#section > #nav > .nav iframe").show();
		}
	);
	$("#section > #nav > .nav #aside").mouseleave(
		function(){
			$("#section > #nav > .nav iframe").hide();
		}
	);
	
	$("#section .post .right .hotbox .hot").eq(1).hide();
	$("#section .post .right h2").click(
		function(){
			$("#section .post .right .line img").eq($(this).index()).show().siblings().hide();
			$("#section .post .right .hotbox .hot").eq($(this).index()).show().siblings().hide();
		}
	);
})