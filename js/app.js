function showResume(){
  $('#myModal').modal('show: true')

}
(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").delay(2000).fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.

  });
  function showResume(){
    debugger
  }


  $(document).ready(function(){
     $('#fullpage').fullpage({
       anchors: ['home', 'about', 'resume', 'portfolio'],
       menu: 'myMenu',
     });

    //typed js
    $(".typed").typed({
        strings: ["My Name is Sol.", "I'm a Web Developer."],
        typeSpeed: 100,
        backDelay: 900,
        loop: true
    });

  });

})(jQuery);
