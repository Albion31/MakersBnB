describe("listings", function() {

  loadFixtures()

  var fixture;
  beforeEach(function () {
    loadFixtures('listings.html');
    $('#post').click()
    fixture = $('#content');
  });

  describe("test", function() {
    it("should work and does work", function() {
      expect(fixture).toContainText('BearBnB');
    });

    // it("should display a form", function() {
    //   // var form = $('#form')
    //   // spyOnEvent(form, 'submit')
    //   document.getElementById('post').click();
    //   expect(fixture).toContainText('Listing Posted.')
    // })
    it("should display a form", function() {
    // var spyEvent = spyOnEvent('#post', 'click')
    //   $('#post').click()
    // expect('click').toHaveBeenTriggeredOn('#post')
    expect(fixture).toContainText('Listing Posted.')
    })

  });

  afterEach(function () {
    fixture.remove();
  });
});
