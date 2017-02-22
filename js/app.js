(function($) {
  "use strict";
  console.log("%c    \u2600SOL          ", "background: pink; color: yellow; font-size: x-large");
  console.log("%c  solthewebdev@gmail.com   ", "background: pink; color: yellow; font-size: medium");
  console.log("%c          \u00a9 2017        ", "background: pink; color: yellow; font-size: large");

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
       anchors: ['home', 'resume', 'portfolio'],
       menu: 'myMenu',
     });

    //typed js
    $(".typed").typed({
        strings: ["My name is Sol ", "I'm a &lt; <span style='color:green'>Web Developer</span> / &gt; "],
        typeSpeed: 100,
        backDelay: 900,
        loop: true
    });

  });

})(jQuery);
