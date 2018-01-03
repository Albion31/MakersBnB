describe("bearbnb", function() {

  var bearbnb;
  var listing;
  beforeEach(function () {
    bearbnb = new BearBnB();
    listing = {
      name: 'Tree 4',
      bio: "Tall and leafy"
    }
  })

  it("stores new listings", function() {
    bearbnb.addListing(listing)
    expect(bearbnb.listingsArray[0].name).toEqual('Tree 4')
  })

  it("should create new listings", function(){
    listingTest = bearbnb.createListing('Leafy Towers', 'Tall and leafy', 4)
    bearbnb.addListing(listingTest)
    expect(bearbnb.listingsArray[0].bio).toEqual('Tall and leafy')
  })
})
