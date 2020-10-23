/*global $, alert, console*/

$(function(){
	'use strict';
	
	//Adjust Header Height
	
	var myHeader = $(".header"),
		mySlider = $(".slider");
	
	myHeader.height($(window).height());
	
	$(window).resize(function(){
		myHeader.height($(window).height());
		
		mySlider.each(function(){
			$(this).css("paddingTop", ($(window).height() - $(".slider div").height()) / 2);
		});
		
	});
	
	//links add active class
	
	$(".links li a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	
	// adjust bxslider list item center
	
	mySlider.each(function(){
		$(this).css("paddingTop", ($(window).height() - $(".slider div").height()) / 2);
	});
	
	// trigger the bxslider
	
	mySlider.bxSlider({
		pager: false
	});
	
	//smoth scroll to div
	
	$(".links li a").click(function(){
		$("html, body").animate({
			scrollTop: $("#" + $(this).data('value')).offset().top
		},1000);
	});
	
	// our auto slider Code
	
	(function autoslider(){
		
		$(".slider2 .active").each(function(){
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000, function(){
					$(this).removeClass("active").next().fadeIn(1000).addClass("active");
					autoslider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function(){
					$(this).removeClass("active");
					$(".slider2 div").eq(0).addClass("active").fadeIn(1000);
					autoslider();
				});
			}
		});
		
	}());
	
	// Trigger MixItUp
	
	var mixer = mixitup('#container');
	
	// Trigger nice scroll
	
	$("body").niceScroll({
		cursorcolor:"#1abc9c",
		cursorwidth:"5px",
		cursorborder:"0px",
		cursorborderradius:"1px"
	});
	
	//adjust shuffle links
	
	$(".shuffle li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	
});