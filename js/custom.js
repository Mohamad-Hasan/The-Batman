$(function(){

	'use strict';

	//header height
	const header = $('.header');

	header.height($(window).height());

	$(window).resize(function () {
		header.height($(window).height());
	});

	//Add/remove class active 

	$('.links li a').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});


	//Bx slider init
    $(document).ready(function(){
      $('.slider').bxSlider({
      	pager: false
      });
    });

 	//centering slider
 	$('.slider-item').height('150px');
 	$('.slider').css("padding-top", ($(window).height() - $('.slider-item').height()) / 2 );


 	//smooth scroll
 	$('.links a').click(function(e) {
 		$('html, body').animate({
 			scrollTop: $('#' +  $(this).data('value')).offset().top
 		},1000);
 		});

 	//testimonial fade-in and out
 	(function autoSlider() {
 		$('.slider2 .active').each(function() {
	 		if (!$(this).is(':last-child')) {
	 			$(this).delay(2500).fadeOut(1000, function() {
	 				$(this).removeClass('active').next().addClass('active').fadeIn();

	 				autoSlider();
	 			});
	 		}

	 		else {
	 			$(this).delay(2500).fadeOut(1000, function (){
	 				$(this).removeClass('active');
	 				$('.slider2 div').eq(0).addClass('active').fadeIn();

	 				autoSlider();
	 			});
	 		}
	 	});

 	}());
 	//mixitup
	 	var mixer = mixitup('.mix-container');
	 	var mixer = mixitup('.mix-container', {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
	});

	 //class shifter for nemesis 
	 $('.nemesis li').click(function () {

	 	$(this).addClass('selected').siblings().removeClass('selected');

	 });


	 // call nice scroll

	$("body").niceScroll({

		cursorcolor:"#f20303",
		cursorwidth:"6px",
		cursorborder: "1px solid #f20303"
	});

});



 	