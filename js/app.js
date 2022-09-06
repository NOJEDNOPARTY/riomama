var common = {
	init: function() {
		common.main();
		common.navigation();
		common.popup();
	},
	main: function() {

		$('.menu-trigger').click(() => {
			$('.header').toggleClass('open');
		});

		let bLazy = new Blazy({});

		$(document).ready(function(){
			$(".anchor").on("click", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top - 70}, 1500);
			});
		});

		$('.sv-slider').owlCarousel({
			loop: false,
			items:5,
			margin: 30,
			nav: false,
			dots: false,
			autoHeight: true,
			responsive:{
				0:{
						items:1,
						dots: true,
						margin: 15,
				},
				500:{
						items:2,
						dots: true,
						margin: 15,
				},
				650:{
						items:3,
						dots: true,
				},
				850:{
						items:4,
						dots: true,
				},
				1200:{
						items:5,
						dots: false,
				}
			}
		});

		let clientsSLider = $('.cl-slider');

		function clientsSLiderInit () {
			clientsSLider.owlCarousel({
				loop:true,
				items:1,
				margin: 0,
				nav: false,
				dots: true,
				autoHeight: true
			});
		};

		const checkWindowWidth = () => {
			if($(window).width() < 600) {
				clientsSLiderInit();
			}else {
				clientsSLider.trigger('destroy.owl.carousel');
			}
		};

		$(window).scroll(checkWindowWidth);
		$(window).resize(checkWindowWidth);
		$(document).ready(checkWindowWidth);

		
	},
	navigation: function () {
		const sections = document.querySelectorAll(".section");
		const navLi = document.querySelectorAll(".header nav a");
		window.onscroll = () => {
			let current = "";
		
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (pageYOffset >= sectionTop - 60) {
					current = section.getAttribute("id"); }
			});
		
			navLi.forEach((li) => {
				li.classList.remove("active");
				if (li.classList.contains(current)) {
					li.classList.add("active");
				}
			});
		};
	},
	popup: function () {
		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				var popupLayout = $(".popup-layout");
				if (!popup.is(e.target) && popupLayout.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').removeClass('active');
					$('body, html').removeClass('hidden');
				}
			});
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$('body, html').addClass('hidden');
			$(popup).addClass('active');
		});
		
		$('.cl-popup').click(function(event){
			event.preventDefault();
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body, html').removeClass('hidden');
		});
	},
};

(function() {
	common.init();
}());
