function BearBnB() {
  this.listings = []
}

BearBnB.prototype.addListing = function(listing) {
  this.listings.push(listing)
}

BearBnB.prototype.createListing = function(name, bio, guests) {
  listing = new Listing(name, bio, guests)
  return listing
}
