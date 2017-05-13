$(document).ready(function() {
  $('#button1').click(function(e) {
    e.preventDefault();
    var username = $('#userName').val();
    var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+username+'?api_key=RGAPI-a70dd01e-0975-47c5-b767-98e4fd0e940b'
    console.log(url);

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      async: false,
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
