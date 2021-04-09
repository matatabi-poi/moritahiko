jQuery(function ($) {
	$('.aboutBody').bgSwitcher({
		images: ['images/about_bg_01.jpg', 'images/about_bg_02.jpg', 'images/about_bg_03.jpg', 'images/about_bg_04.jpg'],
		interval: 4000,
		duration: 1000,
	});
});

$(function () {
	$('.hamburger').click(function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.globalNav').addClass('active');
		} else {
			$('.globalNav').removeClass('active');
		}
	});
	$('.globalNav a[href]').on('click', function (event) {
		$('.hamburger').trigger('click');
	});

	$('a[href^="#"]').click(function () {
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		speed: 1000,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
  ]
	});
});
