     $(document).ready(function(){
          $('.accordion').accordion();
            });
            (function ($) {
              $.fn.accordion = function (options) {

                var defaults = {
                  activeClass: 'active',
                  slideSpeed: 500
                };

                //variables
                var element = $(this);
                var settings = $.extend({}, defaults, options);

                // elements
                var titleElement = null;
                var contentElement = null;


                var init = function(){
                  initializeSelectors();
                  start();
                  initializeListeners();
                }

                var initializeSelectors = function(){
                  titleElement = element.find('.accordion-title');
                  contentElement = element.find('.accordion-content');
                }

                var start = function () {
                  titleElement.first().addClass(settings.activeClass);
                  contentElement.not(':nth-child(2)').hide();
                }

                var initializeListeners = function(){
                  titleElement.click(function(){
                    $(this).toggleClass(settings.activeClass).
                    siblings().
                    removeClass(settings.activeClass);
                    
                    $(this).next().slideToggle(settings.slideSpeed).
                    siblings(".accordion-content").
                    slideUp(settings.slideSpeed);
                  });
                }
                init();
              };
            })(jQuery);

// nav slide toggle
$(document).ready(function() {
  var hamburger = $('.hamburger');
  var	nav		  = $('#header-nav > .nav-holder');
  
  $(hamburger).on('click', function(e) {
    e.preventDefault();
    nav.slideToggle()
  });	
    
  $(window).resize(function(){
    var width = $(window).width();
    if(width > 767 && nav.is(':hidden')) {
      nav.removeAttr('style');
    }	
  });
});














