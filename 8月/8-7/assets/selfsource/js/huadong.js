function BannerImages(){
	
	var b = $("#changeBox_arrow_bar"),
		c = $("ul.ul_change li:not(.arrw_bar)"),
		e = $("ul.changeBox_imgs_list"),
		d = true,
		f = 1; 
	
	var a = function(){
		
		var j = (532 * f - 532),j = j == 0 ? 0 : -j,i = 500;
		
		e.animate({ left: j + "px" }, i)
	};
		
	e.find(".portlet-body").hover(function(){
		clearInterval(h)
	},function(){
		g()
	});
		
	c.click(function(){
		var j = $(this), i = j.position().left;
		//console.log(i);
		f = j.attr("idx");
		a();
		$(this).siblings(".unorange").removeClass("orange");
		$(this).addClass("orange");
		b.animate({ left: i + "px" },500,function(){
			d = true
		})
	}).mouseover(function(){
		if(!d){
			return
		}
		//console.log("idx:"+$(this).attr("idx"))
		clearInterval(h);
		d = false; 
		$(this).siblings(".unorange").removeClass("orange");
		$(this).addClass("orange");
		$(this).click()
	}).mouseout(function(){
		if(!d){
			return
		}
		g()
	});
		
	var h = null;
		
	var g = function(){
		h = setInterval(function(){
			f++;
			if (f > 3){
				f = 1;
				$(this).addClass('orange');
			}
			c.eq(f).click()
		}, 4000)
	};
	
	g()
	
};

$(document).ready(function(){
	BannerImages();//Banner滑动效果
});
function echartH(){
	
	var b = $("#changeBox_bar"),
		c = $("ul.ul_change2 li:not(.arrw_bar)"),
		e = $("ul.changeBox_echarts_list"),
		d = true,
		f = 1; 
	
	var a = function(){
		
		var j = (532 * f - 532),j = j == 0 ? 0 : -j,i = 500;
		
		e.animate({ left: j + "px" }, i)
	};
		
	e.find(".ecar").hover(function(){
		clearInterval(h)
	},function(){
		g()
	});
		
	c.click(function(){
		var j = $(this), i = j.position().left;
		f = j.attr("idx2");
		//console.log(f);
		a();
		$(this).siblings(".unorange").removeClass("orange");
		$(this).addClass("orange");
		b.animate({ left: i + "px" },500,function(){
			d = true
		})
	}).mouseover(function(){
		if(!d){
			return
		}
		clearInterval(h);
		d = false; 
		$(this).siblings(".unorange").removeClass("orange");
		$(this).addClass("orange");
		$(this).click()
	}).mouseout(function(){
		if(!d){
			return
		}
		g()
	});
		
	var h = null;
		
	var g = function(){
		h = setInterval(function(){
			f++;
			if (f >5){
			console.log(f);
				f = 1;
				$(this).addClass('orange');
			}
			c.eq(f).click();
			
		}, 6000)
	};
	
	g()
	
};

$(document).ready(function(){
	echartH();
});