$(document).ready(function() {
  $('#button1').click(function(e) {
    e.preventDefault();
    var username = $('#userName').val();

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(data, status, jqXHR) {
        console.log(data);
      },
    }).done(function() {
      console.log('success');
    }).fail(function() {
      console.log('error');
    }).always(function() {
      console.log('complete');
    });
  });
});

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
});

$('#total').click(function() {
  $('#error').removeAttr('error');
  $('#error').attr('id', 'e');
  $('#e > div').show();
});
