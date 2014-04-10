describe('angular application', function() {


  beforeEach(module('myApp'));

  it('should create a PI constant', inject(function(PI) {
    expect(PI).toBe(3.14159);
  }));

});

