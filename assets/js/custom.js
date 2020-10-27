$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

$(document).ready(function(){
	  $('.owl-carousel').owlCarousel();
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:1, //The number of item displayed
		loop:true, //infinite loop
		autoplay:true, //for autoplay
		autoplayTimeout:2500, //time interval of slider
		autoplayHoverPause:true, //mouse hover to pause slider
		center:true, //center mode
		nav:true, //for navigation button and dots
	});