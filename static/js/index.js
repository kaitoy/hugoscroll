/**
 * Main JS file for HugoScroll behaviours
 */
var $post = $('.post'),
	$first = $('.post.first'),
	$last = $('.post.last'),
	$fnav = $('.fixed-nav'),
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

        $('#header-arrow').click(function () {
            srcTo ($first)
        })

        $('.post-title').each(function () {
        	var t = $(this).text(),
        	    index = $(this).parents('.post-holder').index();
        	$fnav.append("<a class='fn-item' item_index='"+index+"'>"+t+"</a>")
        	$(this).parents('article').attr('id',t.toLowerCase().split(' ').join('-'));
        	$('.fn-item').click(function () {
        		var i = $(this).attr('item_index'),
        			s = $(".post[item_index='"+i+"']")

        		$('html, body').animate({
					scrollTop: s.offset().top
				}, 400);

        	})
        })

        $('.post.last').next('.post-after').hide();
        if($sitehead.length) {
            $(window).scroll( function () {
                var w = $(window).scrollTop(),
                    g = $sitehead.offset().top,
                    h = $sitehead.offset().top + $(this).height()-100;

                if(w >= g && w<=h) {
                    $('.fixed-nav').fadeOut('fast')
                } else {
                    if($(window).width()>500)
                      $('.fixed-nav').fadeIn('fast')
                }

                $post.each(function () {
                    var f = $(this).offset().top,
                        b = $(this).offset().top + $(this).height(),
                        t = $(this).parent('.post-holder').index(),
                        i = $(".fn-item[item_index='"+t+"']"),
                        a = $(this).parent('.post-holder').prev('.post-holder').find('.post-after');

                     $(this).attr('item_index', t);

                    if(w >= f && w<=b) {

                        i.addClass('active');
                        a.fadeOut('slow')
                    } else {
                        i.removeClass('active');
                        a.fadeIn('slow')
                    }
                })
            });
        }
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
