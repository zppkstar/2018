	$(document).ready(function(){
		var c;
		var o = 3;
		c = setInterval(function(){
			var i = o%3;
			$(".nav-pills").children().find("a").attr("aria-expanded","false");
			$(".nav-pills").children().eq(i).find("a").attr("aria-expanded","true");
			$(".nav-pills").children().removeClass("active").eq(i).addClass("active");
			$(".tab-content").children().removeClass("active in").eq(i).addClass("active in");
			o++;
			if(o>5){o=3};
		},3000);
		$(".nav-pills li a").on("mouseenter",function(e){
			var tspar = $(this).parent();
			clearInterval(c);
			$(".nav-pills").children().find("a").attr("aria-expanded","false");
			$(this).attr("aria-expanded","true");
			$(".nav-pills").children().removeClass("active");
			tspar.addClass("active");
			var d = $(this).parent().index();
			o = d
			$(".tab-content").children().removeClass("active in").eq(d).addClass("active in");
		});
		$("#kwx").on("mouseleave",function(e){
			c = setInterval(function(){
				var i = o%3;
				$(".nav-pills").children().find("a").attr("aria-expanded","false");
				$(".nav-pills").children().eq(i).find("a").attr("aria-expanded","true");
				$(".nav-pills").children().removeClass("active").eq(i).addClass("active");
				$(".tab-content").children().removeClass("active in").eq(i).addClass("active in");
				o++;
				if(o>5){o=3};
				},3000);
			})
	});
	$(function(){
	$('.gongzuochengguo .content ul').width(500*$('.gongzuochengguo .content li').length+'px')-50;
	$(".gongzuochengguo .tab a").mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		number = index;
		var distance = -530*index;
		$('.gongzuochengguo .content ul').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.gongzuochengguo .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.gongzuochengguo .tab a:eq('+number+')').addClass('active').siblings().removeClass('active');
			var distance = -530*number;
			$('.gongzuochengguo .content ul').stop().animate({
				left:distance
			});
		}
		var tabChange = setInterval(autotab,250000);
		//鼠标悬停暂停切换
		$('.gongzuochengguo').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.gongzuochengguo').mouseout(function(){
			tabChange = setInterval(autotab,250000);
		});
	};
		
});