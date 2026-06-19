$(document).ready(function () {

  
  $('.accordion-header').click(function () {
    $('.accordion-header').not(this).removeClass('active');
    $('.accordion-content').not($(this).next()).removeClass('active');
    $(this).toggleClass('active');
    $(this).next('.accordion-content').toggleClass('active');
  });

  
  $('.tab-btn').click(function () {
    const targetTab = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $('.tab-content').removeClass('active');
    $(this).addClass('active');
    $('#' + targetTab).addClass('active');
  });

  
  $('#openModal').click(function () {
    $('#bookingModal').fadeIn(300);
  });
  $('.close').click(function () {
    $('#bookingModal').fadeOut(300);
  });
  $(window).click(function (e) {
    if ($(e.target).is('#bookingModal')) {
      $('#bookingModal').fadeOut(300);
    }
  });

});
