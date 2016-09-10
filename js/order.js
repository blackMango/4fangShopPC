// JavaScript Document
$(function () {

	/*$("#section > .listbox #aside dl dd").mouseenter(
		function (){
			$(this).addClass("current-bg");
		}
	);
	$("#section > .listbox #aside dl dd").mouseleave(
		function (){
			$(this).removeClass("current-bg");
		}
	);
	*/
	$("#section > .listbox #aside dl dd").click(
		function (){
			$(this).toggleClass("current-bg").siblings().removeClass("current-bg");
		}
	);
	$("#header > .nav li").click(
		function (){
			$(this).addClass("current").siblings().removeClass("current");
		}
	);
	
})
