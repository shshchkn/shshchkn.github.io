$(document).ready(function () {

	$('input[type="tel"]').mask("+7 (999) 999-99-99");

	$(window).scroll(function faceScroll() {
		$scrlDwn = $(window).scrollTop();
		$face = $(".face");
	    if ($scrlDwn < 858) {
	   		$face.css("height", (858-$scrlDwn));
	    }
	    else if ($scrlDwn >= 858) {
	    	$face.css("height", 0);
	    }
	});

	$('.actions-inner-item-step').text(function(i) {
	  	return i + 1;
	});

	$('.surgery-inner-plus-item-icon').each(function (i){
		$(this).text(i+1);
	});

	$('.comments-inner-slider, .docs-inner-slider').slick({
		arrows: true,
		slidesToShow: 3,
		slideToScroll: 1,
		adaptiveHeight: true,
		responsive: [
		    {
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
		    },
		    {
		    	breakpoint: 992,
		    	settings: {
		    		slidesToShow: 2,
		    		slidesToScroll: 1
		    	}
		    },
		    {
		    	breakpoint: 769,
		    	settings: {
		    		slidesToShow: 1,
		    		slidesToScroll: 1
		    	}
		    }
	  	]
	});

	// function surgeryHover() {

	// 	var surgeryImg  = $(".surgery-hover");
	// 	var surgeryImgAfter = $(".surgery-img-after");
	// 	var mouseOver   = $(".mouse-over");

	// 	surgeryImg.mousemove(function(e) {
	// 		var offset = $(this).offset();
	// 		var offsetY = (e.pageY - offset.top);
	// 		if(offsetY > 50) {
	// 			surgeryImgAfter.css("height", offsetY);
	// 			mouseOver.css("top", (offsetY-27)); 
	// 		}
	// 		else {
	// 			surgeryImgAfter.css("height", 50);
	// 			mouseOver.css("top", 50);
	// 		}
	// 	});
	// }
	// surgeryHover();

	$( function() {
	    $( "#mov" ).draggable({
			axis: "y",
			snap: true,
			containment: "parent",
			drag: function( event, ui ) {
				$('.surgery-img-after').height(ui.position.top);
				$('.surgery-img').height($(this).parent().height() - $('.surgery-img-after').height() );
	    	}
  		});
	});
});