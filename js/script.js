
		
		
(function($) {

'use strict';	
	
	$(document).ready(function() {
		const videoElement = document.getElementById('hiddenVid');
		videoElement
		.play()
		.then(() => {})
		 .catch((error) => {
			if (error.name === "NotAllowedError") {
				setTimeout(() => {
					console.log(error);
					Pace.stop();
				  }, "3000")
		   }
		});


	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
				return 1;
			}
		}
	}
	

	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	

	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	

	var isIE = function isIE() {
 		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	

	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	

	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	

	var isIE10 = function isIE10() {
 		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
   		 	return 1;
		}
	}

	var isIE9 = function isIE9() {
 		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
   		 	return 1;
		}
	}

	var isSafari = function isSafari() {
	 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
   		 	return 1;
		}
	}
	
	

	var fullscreen = function(){
		var fheight = $(window).height();
		var fullscreen_el = $('.fullscreen');
		
		if (device.mobile() && device.landscape() && $(window).width() <= 768){
			fullscreen_el.css("height","425px");
		}
		else
		{
			fullscreen_el.css("height",fheight);	
		}
	}	

	fullscreen();
		
	$(window).resize(function() {	
		fullscreen();	
	});
	
	

		$('.animation').css({
			visibility: 'hidden'
		});	
	
	
	
	Pace.on('done', function () {
		$('#preloader').hide();
	});
	
	Pace.on('hide', function () {
			
		
		if ($("#nav-bar").hasClass("sticky-nav")){
			
			var navbar_el = $("#nav-bar");
			
			// Top Bar
			if (navbar_el.hasClass("top-bar")){
						
				var nav_header_waypoint = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							navbar_el.addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							navbar_el.addClass("stick-it");
						}
					}
					else {
						navbar_el.removeClass("stick-it animated fadeInDownBig");
					}
				
				}, {
  					offset:'-100%'
				});
				
			}
			
			// Bottom Bar
			else if  (navbar_el.hasClass("bottom-bar")){
				
				var waypoints = $('#nav-header').waypoint(function(direction) {
  					
					if (direction === 'down') {
						if( !device.tablet() && !device.mobile() ) {
							navbar_el.addClass("stick-it animated fadeInDownBig");
						}
						else
						{
							navbar_el.addClass("stick-it");
						}
					}
					else if (direction === 'up') {
						navbar_el.removeClass("stick-it animated fadeInDownBig");
					}
						
				}, {
  					offset:'-90px'
				});		
			}
			
		}
		

		if ($("nav ul#nav-menu").hasClass("nav-smooth-scroll")){
			var main_menu = $("nav ul#nav-menu");
			
			//Slider Section
			var slider_waypoint = $('#main-slider').waypoint(function(direction) {
				
				main_menu.find("a").each(function(){				
					$(this).removeClass("active");
				});	
				
				main_menu.find("a").first().addClass("active");		
						
    		},{offset: '-200px'});
		
			//Other Section
			var section_waypoint = $('#content section').waypoint(function(direction) {
				
				var $thisID = "#" + this.element.id;
			
                main_menu.find("a").each(function(){						
					if ($thisID == $(this).attr("href")){
						$(this).addClass("active").parent().siblings().find("a").removeClass("active");
					}
				});          
				
				
    		},{offset: '-20px'});
		}	
				

		if ($("#masonry-gallery").length){
			var $gallery = $('#masonry-gallery');
			
			if (device.tablet() || device.mobile()) {
				$gallery.masonry({
					columnWidth: ".grid-sizer",
					itemSelector: ".masonry-col",
					gutter: ".gutter-sizer",
					transitionDuration: 0,
				});
			}
			else
			{
				$gallery.masonry({
					columnWidth: ".grid-sizer",
					itemSelector: ".masonry-col",
					gutter: ".gutter-sizer",
					transitionDuration: "1s",
				});
			}
		}
		
		// 03.3 Stellar Parallax
		//================================================================================
	 	// if( !device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isIE11() && !isSafari() ) {
			// $(".image-divider").css("background-attachment","fixed");
		 	// $(window).stellar({
			//  	horizontalScrolling: false,
			// 	//  scrollProperty: 'transform',
			// 	 positionProperty: 'transform',
			// 	responsive: true,
		 	// });
	 	// }

		 var image = document.getElementsByClassName('image-divider');
		var instance= new simpleParallax(image, {
			delay: 0.7,
			transition: 'cubic-bezier(0,0,0,1)',
			scale:2

		});
		instance.refresh();

		var image3 = document.getElementsByClassName('other-divider');
		var instance3= new simpleParallax(image3, {
			delay: 0.7,
			transition: 'cubic-bezier(0,0,0,1)',
			scale:1.3

		});
		instance3.refresh();



		var image4 = document.getElementsByClassName('other-divider2');
		var instance4= new simpleParallax(image4, {
			delay: 0.7,
			transition: 'cubic-bezier(0,0,0,1)',
			scale:1.3

		});
		instance4.refresh();


		var image2 = document.getElementsByClassName('image-banner');
		var instance2= new simpleParallax(image2, {
			delay: 0.7,
			transition: 'cubic-bezier(0,0,0,1)',
			scale:1.6

		});
		instance2.refresh();



		


		

			$('.animation').each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' }).addClass('animated');
            		},
            		offset: '95%'
        		});
        	});
			
		
	 		 
	}); 
	
	

	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	var parent_1, parent_2;
	if (!$("nav ul#nav-menu").hasClass("nav-smooth-scroll")){		
		if (pgurl == "" || pgurl.charAt(0) == "#"){
			$("nav ul#nav-menu > li:first-child > a").addClass("active");
		}	
		else{			
     		$("nav ul#nav-menu li a").each(function(){
				var menu_href = $(this).attr("href")
					
	    		if(window.location.href.indexOf(menu_href) > -1) {
          			$(this).addClass("active");
					parent_1 = $(this).parents().eq(2).children();
					parent_2 = $(this).parents().eq(4).children();
					
					if ( parent_1.is( "a" ) ) {
    					parent_1.addClass("active");
  					}
					
					if ( parent_2.is( "a" ) ) {
    					parent_2.addClass("active");
  					}					
					return false;
				}
    		})
		}	
	}
	
	

	$('.nav-smooth-scroll a').smoothScroll({
		speed: 1000,
		offset: -80,
	});	
	

	$("#mobile-nav").on( "click", function(e){
		e.preventDefault();
		$("#nav-menu").toggleClass("open");
	});	
	

	$("#nav-menu.nav-smooth-scroll").on( "click", function(e){
		var target =  $(e.target);
		if ( target.is('a') && target.attr("href") !== "#") {
			target.parents("#nav-menu").removeClass("open");
		}
		return false;
	});

	if ($(window).width() > 991){
		$( '#nav-menu' ).doubleTapToGo();
	}	 


	if ($(window).width() > 991 && $(window).width() <= 1024){
		$( '#nav-menu ul ul' ).addClass("on-left");
	}	

	var slide_image_position = function(){
		$('.image-divider .image-banner .other-divider .video-footer').each(function(){
			var mobile_image_position = $(this).data("mobile-image-position");
			var tablet_image_position = $(this).data("tablet-image-position");
			
			if ($(window).width() <= "480" && mobile_image_position != ""){    		 	
				$(this).css("background-position",mobile_image_position);
			}
			else if ($(window).width() <= "991" && tablet_image_position != ""){    		 	
				$(this).css("background-position",tablet_image_position);
			}       
		});
	}
	
	//Execute on load
	slide_image_position();

	// var videomobile = function(){
	// 	if ($(window).width() < 480) {
	// 		var videoFile = 'images/mobilevid.mp4';
	// 		$('#v1').attr('src',videoFile);
	// 		$('#v1').css("width","100%");
	// 		$('#v1').css("height","100%");
	// 	}else{
	// 		var videoFile = 'images/end.mp4';
	// 		$('#v1').attr('src',videoFile);
	// 		$('#v1').css("width","100%");
	// 		$('#v1').css("height","800px");
	// 	}
	// }
	//Execute on window resize
	// videomobile();
	$(window).resize(function() {	
		slide_image_position();
		// videomobile();
	});

	

	var photo_item = $('.photo-item');	

	 
	photo_item.on( "touchstart touchend", function(e) {
	});		
	
	
	// 06.2 Countdown
	//================================================================================
	var theday = new Date();
	theday = new Date("Dec 8, 2022 14:00:00");
	$('.countdown').countdown({until: theday, format: 'DHMS'});
	
	
	// 06.3 Gift Carousel
	//================================================================================	 
	if ($("#gift-carousel").length){
		
		var gift_carousel = $("#gift-carousel");
    	gift_carousel.owlCarousel({
			items : 4, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
		});
	} 

	if ($("#places-carousel").length){
		
		var places_carousel = $("#places-carousel");
    	places_carousel.owlCarousel({
			items : 3,
			itemsDesktop: [1199,3], 
			itemsDesktopSmall: [979,2], 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation:false,
		});
		
		if (device.tablet() || device.mobile()) {
			var owl_places = places_carousel.data('owlCarousel');
			owl_places.stop()
		}		
	} 
	
	// 06.5 Events Carousel
	//================================================================================	 
	if ($("#events-carousel").length){
		
		var events_carousel = $("#events-carousel");
    	events_carousel.owlCarousel({
			items : 3,
			itemsDesktop: [1199,3], 
			itemsDesktopSmall: [979,2], 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: true,
			navigation:false,
		});
	
	} 	
	
	// 06.6 Smooth Scroll Link
	//================================================================================
	$('a.smooth-scroll').smoothScroll({
		speed: 1000,
	});
	
	// 06.7 Magnific Popup
	//================================================================================
	
	// 06.7.1 Magnific Zoom
	//----------------------------------------------------------------------------------
	if ($(".magnific-zoom").length){
		$('.magnific-zoom').magnificPopup({
 			type: 'image',
			image: {
    			// options for image content type
    			titleSrc: 'title'
 			},
			//fixedContentPos:true,
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
    			}
  			},
		});
	}	
	
	// 06.7.2 Magnific Zoom Gallery
	//----------------------------------------------------------------------------------	
	if ($(".magnific-zoom-gallery").length){
		$('.magnific-zoom-gallery').magnificPopup({
 			type: 'image',
			image: {
    			// options for image content type
    			titleSrc: 'title'
 			},
			gallery: {
         		 enabled:true
        	},
			//fixedContentPos:true,
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
    			}
  			},
		});	 
	}
	 
	// 06.7.3 Magnific Ajax
	//----------------------------------------------------------------------------------
	if ($(".magnific-ajax").length){
		$('.magnific-ajax').magnificPopup({
  			type: 'ajax',
			ajax: {
				settings: {cache:false} 
				// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
				// For example:
				// settings: {cache:false, async:false}
			},
			callbacks: {
    			open: function() {
      				// Will fire when this exact popup is opened
    			},
    			afterClose: function() {
      				// Will fire when popup is closed
				
    			}
  			},
		});	
	}
	
	// 06.8 Icon
	//================================================================================
	if( device.tablet() || device.mobile() ) {
		if (!isIE11desktop()){
			$(".de-icon, .de-icon i").css("transition","none");
		 }
	}


	
	
	// 06.10 Popup Map
	//================================================================================	
	// Onclick grey area, close map
	$(".popup-map-wrapper").on('click', function(e){
		if (e.target !== this){
    		return;
		}
  		$(this).fadeOut();  
	});
	

	var current_color = "default";
	var current_navbar = "white";

	
	//White Navbar Background
	$("#white-navbar").on( "click", function(e){
		e.preventDefault();
		$("#white-navbar span").addClass("active");
		$("#color-navbar span").removeClass("active");
		
		current_navbar = "white";
		$('link[rel*=navbar]').remove();
	});
	
	//Color Navbar Background
	$("#color-navbar").on( "click", function(e){
		e.preventDefault();
		$("#color-navbar span").addClass("active");
		$("#white-navbar span").removeClass("active");
		
		current_navbar = "color";
		$('link[rel*=navbar]').remove();
		$('head').append('<link rel="stylesheet navbar" href="css/skin/' + current_color + '/navbar-style.css" type="text/css" />');
	});	
	
	

});
	 
})(jQuery);		 