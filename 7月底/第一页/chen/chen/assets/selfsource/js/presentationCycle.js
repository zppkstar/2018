var presentationCycle = {
    
    /*
     * Presentation Cycle - a jQuery Cycle extension
     * Author:  Gaya Kessler
     * URL:     http://www.gayadesign.com
     * Date:	03-11-09
     */
    
    //slide options
    slideTimeout: 8000,
    containerId: "presentation_container",
    
    //cycle options
    cycleFx: 'scrollHorz',
    cycleSpeed: 600,  
    
    //progressbar options
    barHeight: 14,
    barDisplacement: 20,
    barImgLeft: "../../assets/selfsource/images/pc_item_left.gif",
    barImgRight: "../../assets/selfsource/images/pc_item_right.gif",
    barImgCenter: "../../assets/selfsource/images/pc_item_center.gif",
    barImgBarEmpty: "../../assets/selfsource/images/pc_bar_empty.gif",
    barImgBarFull: "../../assets/selfsource/images/pc_bar_full.gif",
    
    //variables this script need
    itemCount: 0,
    currentItem: 0,
    itemBarWidth: 0,
    barContainer: "",
    barContainerActive: "",
    barContainerOverflow: "",
    disableAnimation: false,
    
    init: function() {
        
        presentationCycle.itemCount = $('#' + presentationCycle.containerId).children().length;

        presentationCycle.barContainer = $("<div></div>");
        $(presentationCycle.barContainer).addClass("pc_bar_container");
        
        var subtrackSpace = (presentationCycle.itemCount * presentationCycle.barHeight);
        var totalWidth = $('#' + presentationCycle.containerId).innerWidth() - presentationCycle.barDisplacement;
        var fillWidth = Math.floor((totalWidth - subtrackSpace) / (presentationCycle.itemCount - 1));
        presentationCycle.itemBarWidth = fillWidth;
        
        for (var i = 0; i < presentationCycle.itemCount; i++) {
            var item = $("<div>&nbsp;</div>").appendTo(presentationCycle.barContainer);
            var extra_bar = true;
            if (i == 0) {
                $(item).addClass("left");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle.barImgLeft + ")",
                    height: presentationCycle.barHeight + "px",
                    width: presentationCycle.barHeight + "px" 
                });
            } else if (i == (presentationCycle.itemCount - 1)) {
                $(item).addClass("right");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle.barImgRight + ")",
                    height: presentationCycle.barHeight + "px",
                    width: presentationCycle.barHeight + "px"
                });
                extra_bar = false;
            } else {
                $(item).addClass("center");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle.barImgCenter + ")",
                    height: presentationCycle.barHeight + "px",
                    width: presentationCycle.barHeight + "px"
                });
            }
            $(item).attr('itemNr', (i + 1));
            $(item).css('cursor', 'pointer');
            $(item).click(function() {
               presentationCycle.gotoSlide($(this).attr('itemNr'));
            });
            
            if (extra_bar == true) {
                var item = $("<div>&nbsp;</div>").appendTo(presentationCycle.barContainer);
                $(item).addClass("bar");
                 $(item).css({
                    backgroundImage: "url(" + presentationCycle.barImgBarEmpty + ")",
                    height: presentationCycle.barHeight + "px",
                    width: fillWidth -1 + "px",
                });
            }
        }
        
        var overflow = $("<div></div>");
        $(overflow).addClass("pc_bar_container_overflow");
        $(overflow).css({
            /*overflow: "hidden",*/
            width: totalWidth + "px"
        });
        var underflow = $("<div></div>");
        $(underflow).addClass("pc_bar_container_underflow").appendTo(overflow);
        
        presentationCycle.barContainerActive = $(presentationCycle.barContainer).clone().appendTo(underflow);
        $(presentationCycle.barContainerActive).removeClass("pc_bar_container");
        $(presentationCycle.barContainerActive).children().each(function () {
            $(this).css({
                backgroundPosition: "right"
            });
            if ($(this).css("background-image").match(presentationCycle.barImgBarEmpty)) {
                var newImg = $(this).css("background-image").replace(presentationCycle.barImgBarEmpty, presentationCycle.barImgBarFull);
                $(this).css("background-image", newImg);
            }
        });
        $(overflow).css({
            width: presentationCycle.barHeight + "px" - 100,
            height: presentationCycle.barHeight + "px"
        });
        
        presentationCycle.barContainerOverflow = overflow;
        
        $('#' + presentationCycle.containerId).cycle({
    		fx: presentationCycle.cycleFx,
            speed: presentationCycle.cycleSpeed,
            timeout: presentationCycle.slideTimeout,
            before: function(currSlideElement, nextSlideElement) { presentationCycle.beforeSlide(currSlideElement, nextSlideElement); }
    	});
        
        presentationCycle.barContainer.appendTo($('#' + presentationCycle.containerId));
        overflow.appendTo($('#' + presentationCycle.containerId));
        
        var i = 0;
        $(".pc_bar_container_overflow .left, .pc_bar_container_overflow .center, .pc_bar_container_overflow .right").each(function () {
            $(this).attr('itemNr', (i + 1));
            $(this).css('cursor', 'pointer');
            $(this).click(function() {
                presentationCycle.gotoSlide($(this).attr('itemNr'));
            });
            i++;
        });
    },
    
    beforeSlide: function(currSlideElement, nextSlideElement) {
        if (presentationCycle.currentItem == 0) {
            presentationCycle.currentItem = 1;
        } else {
            presentationCycle.currentItem = (presentationCycle.itemCount - ($(nextSlideElement).nextAll().length)) + 2;
        }
        presentationCycle.animateProcess();
    },
    
    animateProcess: function() {
        var startWidth = (presentationCycle.itemBarWidth * (presentationCycle.currentItem - 1)) + (presentationCycle.barHeight * presentationCycle.currentItem);
        if (presentationCycle.currentItem != presentationCycle.itemCount) {
            var newWidth = (presentationCycle.itemBarWidth * (presentationCycle.currentItem)) + (presentationCycle.barHeight * (presentationCycle.currentItem + 1));   
        } else {
            var newWidth = presentationCycle.barHeight;
        }
        
        $(presentationCycle.barContainerOverflow).css({
            width: startWidth + "px"
        });
        if (presentationCycle.disableAnimation == false) {
            $(presentationCycle.barContainerOverflow).stop().animate({
                width: newWidth + "px"
            }, (presentationCycle.slideTimeout - 100));   
        }
    },
    
    gotoSlide: function(itemNr) {
        $(presentationCycle.barContainerOverflow).stop();
        presentationCycle.disableAnimation = true;
        $('#' + presentationCycle.containerId).cycle((itemNr - 1));
        $('#' + presentationCycle.containerId).cycle('pause');
    }
    
};
var presentationCycle1 = {
    
    /*
     * Presentation Cycle - a jQuery Cycle extension
     * Author:  Gaya Kessler
     * URL:     http://www.gayadesign.com
     * Date:	03-11-09
     */
    
    //slide options
    slideTimeout: 8000,
    containerId: "presentation_container1",
    
    //cycle options
    cycleFx: 'scrollHorz',
    cycleSpeed: 600,  
    
    //progressbar options
    barHeight: 14,
    barDisplacement: 20,
    barImgLeft: "../../assets/selfsource/images/pc_item_left.gif",
    barImgRight: "../../assets/selfsource/images/pc_item_right.gif",
    barImgCenter: "../../assets/selfsource/images/pc_item_center.gif",
    barImgBarEmpty: "../../assets/selfsource/images/pc_bar_empty.gif",
    barImgBarFull: "../../assets/selfsource/images/pc_bar_full.gif",
    
    //variables this script need
    itemCount: 0,
    currentItem: 0,
    itemBarWidth: 0,
    barContainer: "",
    barContainerActive: "",
    barContainerOverflow: "",
    disableAnimation: false,
    
    init: function() {
        
        presentationCycle1.itemCount = $('#' + presentationCycle1.containerId).children().length;

        presentationCycle1.barContainer = $("<div></div>");
        $(presentationCycle1.barContainer).addClass("pc_bar_container");
        
        var subtrackSpace = (presentationCycle1.itemCount * presentationCycle1.barHeight);
        var totalWidth = $('#' + presentationCycle1.containerId).innerWidth() - presentationCycle1.barDisplacement;
        var fillWidth = Math.floor((totalWidth - subtrackSpace) / (presentationCycle1.itemCount - 1));
        presentationCycle1.itemBarWidth = fillWidth;
        
        for (var i = 0; i < presentationCycle1.itemCount; i++) {
            var item = $("<div>&nbsp;</div>").appendTo(presentationCycle1.barContainer);
            var extra_bar = true;
            if (i == 0) {
                $(item).addClass("left");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle1.barImgLeft + ")",
                    height: presentationCycle1.barHeight + "px",
                    width: presentationCycle1.barHeight + "px" 
                });
            } else if (i == (presentationCycle1.itemCount - 1)) {
                $(item).addClass("right");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle1.barImgRight + ")",
                    height: presentationCycle1.barHeight + "px",
                    width: presentationCycle1.barHeight + "px"
                });
                extra_bar = false;
            } else {
                $(item).addClass("center");
                $(item).css({
                    backgroundImage: "url(" + presentationCycle1.barImgCenter + ")",
                    height: presentationCycle1.barHeight + "px",
                    width: presentationCycle1.barHeight + "px"
                });
            }
            $(item).attr('itemNr', (i + 1));
            $(item).css('cursor', 'pointer');
            $(item).click(function() {
               presentationCycle1.gotoSlide($(this).attr('itemNr'));
            });
            
            if (extra_bar == true) {
                var item = $("<div>&nbsp;</div>").appendTo(presentationCycle1.barContainer);
                $(item).addClass("bar");
                 $(item).css({
                    backgroundImage: "url(" + presentationCycle1.barImgBarEmpty + ")",
                    height: presentationCycle1.barHeight + "px",
                    width: fillWidth -1 + "px",
                });
            }
        }
        
        var overflow = $("<div></div>");
        $(overflow).addClass("pc_bar_container_overflow");
        $(overflow).css({
            /*overflow: "hidden",*/
            width: totalWidth + "px"
        });
        var underflow = $("<div></div>");
        $(underflow).addClass("pc_bar_container_underflow").appendTo(overflow);
        
        presentationCycle1.barContainerActive = $(presentationCycle1.barContainer).clone().appendTo(underflow);
        $(presentationCycle1.barContainerActive).removeClass("pc_bar_container");
        $(presentationCycle1.barContainerActive).children().each(function () {
            $(this).css({
                backgroundPosition: "right"
            });
            if ($(this).css("background-image").match(presentationCycle1.barImgBarEmpty)) {
                var newImg = $(this).css("background-image").replace(presentationCycle1.barImgBarEmpty, presentationCycle1.barImgBarFull);
                $(this).css("background-image", newImg);
            }
        });
        $(overflow).css({
            width: presentationCycle1.barHeight + "px" - 100,
            height: presentationCycle1.barHeight + "px"
        });
        
        presentationCycle1.barContainerOverflow = overflow;
        
        $('#' + presentationCycle1.containerId).cycle({
    		fx: presentationCycle1.cycleFx,
            speed: presentationCycle1.cycleSpeed,
            timeout: presentationCycle1.slideTimeout,
            before: function(currSlideElement, nextSlideElement) { presentationCycle1.beforeSlide(currSlideElement, nextSlideElement); }
    	});
        
        presentationCycle1.barContainer.appendTo($('#' + presentationCycle1.containerId));
        overflow.appendTo($('#' + presentationCycle1.containerId));
        
        var i = 0;
        $(".pc_bar_container_overflow .left, .pc_bar_container_overflow .center, .pc_bar_container_overflow .right").each(function () {
            $(this).attr('itemNr', (i + 1));
            $(this).css('cursor', 'pointer');
            $(this).click(function() {
                presentationCycle1.gotoSlide($(this).attr('itemNr'));
            });
            i++;
        });
    },
    
    beforeSlide: function(currSlideElement, nextSlideElement) {
        if (presentationCycle1.currentItem == 0) {
            presentationCycle1.currentItem = 1;
        } else {
            presentationCycle1.currentItem = (presentationCycle1.itemCount - ($(nextSlideElement).nextAll().length)) + 2;
        }
        presentationCycle1.animateProcess();
    },
    
    animateProcess: function() {
        var startWidth = (presentationCycle1.itemBarWidth * (presentationCycle1.currentItem - 1)) + (presentationCycle1.barHeight * presentationCycle1.currentItem);
        if (presentationCycle1.currentItem != presentationCycle1.itemCount) {
            var newWidth = (presentationCycle1.itemBarWidth * (presentationCycle1.currentItem)) + (presentationCycle1.barHeight * (presentationCycle1.currentItem + 1));   
        } else {
            var newWidth = presentationCycle1.barHeight;
        }
        
        $(presentationCycle1.barContainerOverflow).css({
            width: startWidth + "px"
        });
        if (presentationCycle1.disableAnimation == false) {
            $(presentationCycle1.barContainerOverflow).stop().animate({
                width: newWidth + "px"
            }, (presentationCycle1.slideTimeout - 100));   
        }
    },
    
    gotoSlide: function(itemNr) {
        $(presentationCycle1.barContainerOverflow).stop();
        presentationCycle1.disableAnimation = true;
        $('#' + presentationCycle1.containerId).cycle((itemNr - 1));
        $('#' + presentationCycle1.containerId).cycle('pause');
    }
    
}