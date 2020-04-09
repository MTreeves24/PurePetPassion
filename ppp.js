//SMOOTH SCROLLING//

// Select all links with hashes
$('a[href*="#"]').click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          }
        }
      );
    }
  }
});

$(document).ready(function () {
  // Show hide popover
  $(".menu-toggle").click(function () {
    $("ul").toggleClass("opening");
    $(this).toggleClass("open");
  });
});
$("ul a").on("click", function () {
  $("ul").removeClass("opening");
  $(".menu-toggle").removeClass("open");
});

//TERMS AND CONDITIONS TABBED LAYOUT************************//
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

$(function () {
  $("#boxclose").click(function () {
    $("#box").animate({ top: "-200px" }, 400, function () {});
  });
});

const label = document.querySelector(".read-more-trigger");
label.addEventListener("click", function () {
  if (this.textContent === "See more") {
    this.textContent = "See less";
  } else if (this.textContent === "See less") {
    this.textContent = "See more";
  }
});
