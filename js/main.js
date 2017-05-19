$(document).ready(function() {
  $('#menu-items li a').click(function() {
    $('li.current').removeClass('current');
    $(this).closest('li').addClass('current');
  });

  $('#main-content-nav li a').click(function() {
    $('li.active').removeClass('active');
    $(this).closest('li').addClass('active');
  });

  $('#solo, #flex, #queue').click(function() {
    $('#e').removeAttr('e');
    $('#e').attr('id','error');
    $('#error > div').hide();
    // $('#error').append('<h3>There are no results recorded.</h3>');
  });

  $('#total').click(function() {
    $('#error').removeAttr('error');
    $('#error').attr('id', 'e');
    $('#e > div').show();
  });

  $('#s6, #link').click(function() {
    $('li.active-item').removeClass('active-item');
    $(this).closest('li').addClass('active-item');
  });
});
