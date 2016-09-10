// JavaScript Document
$(function () {

	$(".contentbox li").click(
		function (){
			$(this).addClass("current").siblings().removeClass("current");
		}
	);
	
})