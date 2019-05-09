//Cache reference to window and animation items
var $animation_elements = $('.project-container');
var $window = $(window);
$window.on('scroll', check_if_in_view);
$window.on('scroll resize', check_if_in_view);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// OLD SCROLL CODE BROKEN
// $(document).scroll(function() {
//     console.log('$(window).scrollTop():', $(window).scrollTop()); // 0...increases as you scroll down
//     const topDivHeight = $(".project-container").height();
//     console.log('$(".project-container").height():', $(".project-container").height());
    
//     const viewPortSize = $(window).height();
//     console.log('$(window).height():', $(window).height()); // 808
    
//     const triggerAt = 150;
//     const triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
//     if ($(window).scrollTop() >= triggerHeight) {
//         $('.fadethisdiv').css('visibility', 'visible').hide().fadeIn();
//         $(this).off('scroll');
//     }

// });