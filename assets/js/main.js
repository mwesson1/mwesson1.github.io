/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');


	// var $form = $('form#test-form'),
	//     url = 'https://script.google.com/macros/s/AKfycbz2nbUgn-lL1Lyv3Xe4KPOc2HdFqAzt2SknyFIEiUlkoq-RILXs/exec'

	// $('#submit-form').on('click', function(e) {
	//   e.preventDefault();
	//   var jqxhr = $.ajax({
	//     url: url,
	//     method: "GET",
	//     dataType: "json",
	//     data: $form.serializeObject()
	//   }).success(
	//     // do something
	//   );
	// })

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		$('#cropcircle').attr('href','http://www.google.com');

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);