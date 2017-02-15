$(document).ready(function () {
  var top = $('#mynav').offset().top - parseFloat($('#mynav').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, add the fixed class
      $('#mynav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#mynav').removeClass('fixed');
    }
  });
});
