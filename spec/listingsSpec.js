describe("listings", function(){

  loadFixtures()

  var fixture;
  beforeEach(function () {
    loadFixtures('listings.html');
    fixture = $('#content');
    // fixture.listings();
  });

     describe("test", function(){
      it("should work and does work", function(){
        expect(fixture).toContainText('BearBnB');
      });
      it("should be clicked", function(){
        var click =
      })
    });

  afterEach(function () {
    fixture.remove();
  });
});
