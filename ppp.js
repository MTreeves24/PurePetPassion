      $(document).ready(function (event) {
          var first_img = $('#imageContainer li:first img');
          var imageContainer = $("#imageContainer");
          $("#main-img").attr("src", $(first_img).attr("src"));
          $("html").css($(first_img).attr("src") + ")");

          $("#imageBox img").click(function () {
              $("#main-img").attr("src", $(this).attr("src"));
              $("html").css($(this).attr("src") + ")");
              $("#main-img").fadeOut(0);
              $("#main-img").fadeIn(1000);
          });

          imageContainer.find('ul').on('mousewheel', function (e, delta) {
              this.scrollLeft -= (delta * 50);
              e.preventDefault();
          });
      });



      //SMOOTH SCROLLING//

      // Select all links with hashes
      $('a[href*="#"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              }
            });
          }
        }
      });



      $(document).ready(function(){
          // Show hide popover
          $(".menu-toggle").click(function(){
            $('ul').toggleClass('opening');
            $(this).toggleClass('open');
          });
      });
      $( 'ul a' ).on("click", function(){
        $('ul').removeClass('opening');
        $('.menu-toggle').removeClass('open');

      });

//TERMS AND CONDITIONS TABBED LAYOUT************************//
$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

});