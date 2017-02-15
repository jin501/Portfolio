(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").delay(2000).fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.

  });


  $(document).ready(function(){
     $('#fullpage').fullpage();

    //typed js
    $(".typed").typed({
        strings: ["My Name is Sol", "I'm a Web Developer."],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
  });


})(jQuery);
