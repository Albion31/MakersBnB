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
    var name = $('#name').val();
    var bio = $('#bio').val();
    var guests = $('#guests').val();
    var newEntry = bearbnb.createListing(name, bio, guests);
    bearbnb.addListing(newEntry);
    updateList()
    sendToServer(newEntry);
  })
})


function sendToServer(newEntry) {
  JSON.stringify(newEntry);
  $.ajax({
      type: 'post',
      url: 'localhost:9292/listings'
      data: newEntry,
      dataType: 'json',
      success: console.log("data sent"),
      fail: console.log("error")
  });
}
