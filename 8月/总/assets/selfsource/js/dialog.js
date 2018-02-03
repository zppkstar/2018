var w,h,className;
function getSrceenWH(){
	w = $(window).width();
	h = $(window).height();
	$('#dialogBg').width(w).height(h);
}

window.onresize = function(){  
	getSrceenWH();
}  
$(window).resize();  

$(function(){
	getSrceenWH();
	
	//显示弹框
	$('.dialog_btn').click(function(){
		className = $(this).attr('class');
		console.log(className);
		$('#dialogBg').fadeIn(300);
		$('#dialog').removeAttr('class').addClass('animated '+className+'').fadeIn();
	});
	
	//关闭弹窗
	$('.close_btn').click(function(){
		$('#dialogBg').fadeOut(300,function(){
			$('#dialog').addClass('bounceOutUp').fadeOut();
		});
	});
});


//

$("input").click(function() {
    $(this).siblings("div").children("span").addClass("active");
    $(this).parents("div").siblings("div").find("span").removeClass("active");
	$(this).siblings("div").addClass("active");
    $(this).parents("div").siblings().find("div").removeClass("active");
});

//

$(".apple").click(function() {
	$(".appleCon").show();
	$(".appleCon").siblings().hide();
});
$(".banana").click(function() {
	$(".bananaCon").show();
	$(".bananaCon").siblings().hide();
});
$(".orange").click(function() {
	$(".orangeCon").show();
	$(".orangeCon").siblings().hide();
});
$(".watermelon").click(function() {
	$(".watermelonCon").show();
	$(".watermelonCon").siblings().hide();
});
$(".cantaloup").click(function() {
	$(".cantaloupCon").show();
	$(".cantaloupCon").siblings().hide();
});
$(".papaya").click(function() {
	$(".papayaCon").show();
	$(".papayaCon").siblings().hide();
});
$(".cherry").click(function() {
	$(".cherryCon").show();
	$(".cherryCon").siblings().hide();
});
$(".plum").click(function() {
	$(".plumCon").show();
	$(".plumCon").siblings().hide();
});
$(".peach").click(function() {
	$(".peachCon").show();
	$(".peachCon").siblings().hide();
});
$(".mulberries").click(function() {
	$(".mulberriesCon").show();
	$(".mulberriesCon").siblings().hide();
});
$(".strawberry").click(function() {
	$(".strawberryCon").show();
	$(".strawberryCon").siblings().hide();
});
$(".ximei").click(function() {
	$(".ximeiCon").show();
	$(".ximeiCon").siblings().hide();
});
$(".ginkgo").click(function() {
	$(".ginkgoCon").show();
	$(".ginkgoCon").siblings().hide();
});
$(".apricot").click(function() {
	$(".apricotCon").show();
	$(".apricotCon").siblings().hide();
});
$(".grape").click(function() {
	$(".grapeCon").show();
	$(".grapeCon").siblings().hide();
});