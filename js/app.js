(function($) {
  "use strict";
  console.log("%c    \u2600SOL          ", "background: pink; color: yellow; font-size: x-large");
  console.log("%c  solthewebdev@gmail.com   ", "background: pink; color: yellow; font-size: medium");
  console.log("%c          \u00a9 2017        ", "background: pink; color: yellow; font-size: large");

  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader

    $("#status").delay(1000).fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.

  });
  function showResume(){

  }



  $(document).ready(function(){
    if ( $(window).width() < 800 || window.Touch) {
        var $sensitivity = 10;
    } else{
        var $sensitivity = 100;
    }
     $('#fullpage').fullpage({
       anchors: ['home', 'resume', 'portfolio'],
       menu: 'myMenu',
      //  verticalCentered: true,
       scrollOverflow:true,
       normalScrollElements: '#my-resume, #ed-ex, #tech', '#coding',
      //  paddingBottom: '0',
      //  scrollingSpeed: '800',
      //  navigation: true,
      //  navigationPosition: 'right',
      //  fixedElements:'#header',
      //  resize: false,
      //  css3: true,
       touchSensitivity: $sensitivity
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
