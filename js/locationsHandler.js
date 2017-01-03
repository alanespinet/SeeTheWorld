$('#locations').on('click', '.card', function(e){
  var w = $(window).innerWidth();
  $('#locations').css('left', -w + 'px');
  var rindex = $(this).children('location-dir').attr('rindex');

  loadLocationInfo(rindex);
});


function loadLocationInfo(pLocationIndex){
  $.ajax('pseudoData/locations.json', {
    method: 'GET',
    success: function(response){
      var locationToShow = response[pLocationIndex];

      $('#desc').text(locationToShow.description);
      $('#imgCar1').attr('src', `img/locations/${locationToShow.images[0]}`);
      $('#imgCar2').attr('src', `img/locations/${locationToShow.images[1]}`);

      $('.location-image').off('click');
      $('.location-image').on('click', function(){
        var $divOver = $('<div class="overlay container"></div>');
        var src = $(this).attr('src');

        $divOver.css('background-color', 'rgba(50, 50, 50, 0.7)');
        $divOver.width($(window).innerWidth());
        $divOver.height($(window).innerHeight());
        $divOver.css('position', 'fixed');
        $divOver.css('left', '0');
        $divOver.css('top', '0');

        var $image = $('<img class="img-restricted" />');
        $image.attr('src', src);
        $divOver.append($image);

        $('body').append($divOver);
        return false;
      });

      $('#desc1').text(locationToShow.description1);
      $('#price').html('<i class="pe-7s-credit pe-2x pe-va"></i>Prize: ' + locationToShow.price);
      $('#duration').html('<i class="pe-7s-clock pe-2x pe-va"></i>Duration: ' + locationToShow.duration);
      $('#available').html('<i class="pe-7s-date pe-2x pe-va"></i>Available: ' + locationToShow.available);
      $('#discounts').html('<i class="pe-7s-like2 pe-2x pe-va"></i>Discounts: ' + locationToShow.discounts);

      if(locationToShow.discounts == "No"){ $('.locs .pe-7s-like2').css('color', 'tomato'); }
      else { $('.locs .pe-7s-like2').css('color', 'forestgreen'); }

      $('#locationName').text(locationToShow.name);
    },
    error: function(error){
      console.log(error.message);
    }
  });


  $('#locations-button').off('click')
  .on('click', function(){
    location.href='#register';
  });


  $('body').on('click', '.overlay', function(){
    $(this).remove();
  });


  $('#back-arrow').on('click', function(){
    $('#locations').css('left', '0px');
  });
}
