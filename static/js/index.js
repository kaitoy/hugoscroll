/**
 * Main JS file for HugoScroll behaviours
 */
var $post = $('.post');

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
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
