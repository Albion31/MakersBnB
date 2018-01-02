describe("listings", function() {

  var bearbnb;
  var listing;
  beforeEach(function () {
    bearbnb = new BearBnB();
    listing = {
      name: 'Tree 4',
    }
  })

  it("stores new listings", function() {
    bearbnb.addListing(listing)
    expect(bearbnb.listings[0].name).toEqual('Tree 4')
  })
})
