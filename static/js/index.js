/**
 * Main JS file for HugoScroll behaviours
 */
var $post = $('.post'),
	$first = $('.post.first'),
	$last = $('.post.last'),
	$postholder = $('.post-holder'),
	$postafter = $('.post-after'),
	$sitehead = $('#site-head');

/*globals jQuery, document */
(function ($) {
    "use strict";
    function srcTo (e) {
    	$('html, body').animate({
			scrollTop: e.offset().top
		}, 1000);
    }
    $(document).ready(function(){
        $postafter.each(function (e) {
        	var bg = $(this).parent().css('background-color')
        	$(this).css('border-top-color', bg)
        })

        $('.post-title').each(function () {
        	var t = $(this).text(),
        	    index = $(this).parents('.post-holder').index();
        	$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
        })

        $('.post.last').next('.post-after').hide();
        $('ul li').before('<span class="bult fa fa-asterisk icon-asterisk"></span>')
        $('blockquote p').prepend('<span class="quo icon-quote-left"></span>')
                .append('<span class="quo icon-quote-right"></span>')

        $post.css('visibility','hidden');
        $(window).on('load', function(e) {
          var windowHeight = $(window).height();
          var topWindow = $(window).scrollTop();
          $post.each(function() {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 100) {
              $(this).css('visibility','visible');
            }
          });
        });
        $(window).on('scroll', function(e) {
          var windowHeight = $(window).height();
          var topWindow = $(window).scrollTop();
          $post.each(function() {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 100) {
              if ($(this).css('visibility') === 'hidden') {
                $(this).addClass('fadeInDown');
              }
            }
          });
        });
    });
}(jQuery));
