function BearBnB() {
  this.listingsArray = []
}

BearBnB.prototype.addListing = function(listing) {
  this.listingsArray.push(listing)
}

BearBnB.prototype.createListing = function(name, bio, guests) {
  listing = new Listing(name, bio, guests)
  return listing
}
