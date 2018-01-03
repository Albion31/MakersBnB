$(document).ready(function() {

  var bearbnb = new BearBnB()

  // updateListings = function() {
  //   for(var i = 0; i < bearbnb.listings.length; i++) {
  //     // getListing(i);
  //     var listing = bearbnb.listings[i];
  //     var info = "<h2 class='listing_title'>" + listing.name + "</h2>";
  //     // "<h2 id='listing_bio'>" + listing.bio + "</h2>" +
  //     // "<h2 id='listing_guests'>" + listing.guests + "</h2>";
  //     $('#list_of_listings').innerHTML += info;
  //     // printer();
  //   };
  // }

  updateList = function() {
    $(document).ready(function(){
      var listing = bearbnb.listingsArray[bearbnb.listingsArray.length - 1]
      //$.each(listings, function(){
        $("#list_of_listings").append(listing.name + ": " + listing.bio + listing.guests + '<br>');

    });
  }

  // printer = function() {
  //   $("#list_of_listings").innerHTML = "<div> test </div>";
  // }
  // getListing = function(i) {
  //   var listing = bearbnb.listings[i]
  //   var listing_title = text(listing.name)
  //   $('#listing_bio').text(listing.bio)
  //   $('#listing_guests').text(listing.guests)
  // }

  $('#post').click(function() {
    var name = $('#name').val()
    var bio = $('#bio').val()
    var guests = $('#guests').val()
    bearbnb.addListing(bearbnb.createListing(name, bio, guests))
    updateList()
  })
})
