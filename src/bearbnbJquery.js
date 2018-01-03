$(document).ready(function() {

  var bearbnb = new BearBnB()

  updateListings = function() {
    var listing = bearbnb.listings[bearbnb.listings.length - 1]
    $('#listing_title').text(listing.name)
    $('#listing_bio').text(listing.bio)
    $('#listing_guests').text(listing.guests)
  }

  $('#post').click(function() {
    var name = $('#name').val()
    var bio = $('#bio').val()
    var guests = $('#guests').val()
    bearbnb.addListing(bearbnb.createListing(name, bio, guests))
    updateListings()
  })
})
