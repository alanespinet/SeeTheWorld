$('#locations').on('click', '.card', function(){
  var w = $(window).innerWidth();
  $('#locations').css('left', -w + 'px');
  var rindex = $(this).children('location-dir').attr('rindex');

  loadLocationInfo(rindex);
  return false;
});

function loadLocationInfo(pLocationIndex){
  $.ajax('pseudoData/locations.json', {
    method: 'GET',
    success: function(response){
      var locationToShow = response[pLocationIndex];

      $('#desc').text(locationToShow.description);
      $('#imgCar1').attr('src', `img/locations/${locationToShow.images[0]}`);
      $('#imgCar2').attr('src', `img/locations/${locationToShow.images[1]}`);
      $('#desc1').text(locationToShow.description1);
      $('#price').html('<i class="pe-7s-credit pe-2x pe-va"></i>Prize: ' + locationToShow.price);
      $('#duration').html('<i class="pe-7s-clock pe-2x pe-va"></i>Duration: ' + locationToShow.duration);
      $('#available').html('<i class="pe-7s-date pe-2x pe-va"></i>Available: ' + locationToShow.available);
      $('#discounts').html('<i class="pe-7s-like2 pe-2x pe-va"></i>Discounts: ' + locationToShow.discounts);

      if(locationToShow.discounts == "No"){ $('.locs .pe-7s-like2').css('color', 'tomato'); }
      else { $('.locs .pe-7s-like2').css('color', 'forestgreen'); }

      // $('#imgCar3').attr('src', `img/locations/${locationToShow.images[2]}`);

      $('#locationName').text(locationToShow.name);
    },
    error: function(error){
      console.log(error.message);
    }
  });

}
