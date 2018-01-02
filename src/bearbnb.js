function BearBnB() {
  this.listings = []
}

BearBnB.prototype.addListing = function(listing) {
  this.listings.push(listing)
}
