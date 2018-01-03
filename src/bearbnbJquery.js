$(document).ready(function() {

  var bearbnb = new BearBnB()

  updateList = function() {
    $(document).ready(function(){
      var listing = bearbnb.listingsArray[bearbnb.listingsArray.length - 1]
        $("#list_of_listings").append("Property Name: " + listing.name + '<br>' +
                                      " Description: " + listing.bio + '<br>' +
                                      " Number of Guests: " + listing.guests + '<br><br>');
    });
  }

  $('#post').click(function() {
    var name = $('#name').val()
    var bio = $('#bio').val()
    var guests = $('#guests').val()
    bearbnb.addListing(bearbnb.createListing(name, bio, guests))
    updateList()
  })
})
