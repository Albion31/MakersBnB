$(document).ready(function() {

  var bearbnb = new BearBnB()
  getListings()

  $('#post').click(function() {
    var name = $('#name').val();
    var bio = $('#bio').val();
    var guests = $('#guests').val();
    var newEntry = bearbnb.createListing(name, bio, guests);
    bearbnb.addListing(newEntry);
    sendToServer(newEntry);
    getListings();
  })
})


function sendToServer(newEntry) {
  var entry = JSON.stringify(newEntry);
  $.ajax({
      type: 'POST',
      url: 'http://localhost:9292/listings',
      data: entry,
      dataType: 'json',
      success: console.log("data sent"),
      error: console.log("error")
  });
}

function getListings() {
  $.get('http://localhost:9292/listings', function(listings) {
    if($('#list_of_listings').children().length == 0) {
      populateList(listings)
    } else {
      console.log('Success')
      updateList(listings)
    }
  })
}

function populateList(listings) {
  $(document).ready(function() {
    listings.forEach(function(listing) {
      printListing(listing)
    })
  });
}

function updateList(listings) {
  $(document).ready(function() {
    var listing = listings[listings.length - 1]
      printListing(listing)
  });
}

function printListing(listing) {
  $("#list_of_listings").append("<li>Property Name: " + listing.name + '<br>' +
                                " Description: " + listing.bio + '<br>' +
                                " Number of Guests: " + listing.guests + '<br><br></li>');
}
