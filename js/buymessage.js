// JavaScript Document
$(function () {
	$("#section .adressbox h5,#section .adressbox h6").click(
		function(){
			$("#adress,#bg").show();
			$("body").addClass("fix");
		}
	);
	$("#adress > .ctrl").click(
		function(){
			$("#adress,#bg").hide();
			$("body").removeClass("fix");
		}
	);
})