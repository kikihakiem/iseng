var iseng = require('../index.js');

describe("Iseng", function() {
  describe("init", function() {
    it("reads buffer into patterns", function() {
      var fakeData = jasmine.createSpyObj("data", ["toString"]);
      iseng.init(fakeData);

      expect(fakeData.toString).toHaveBeenCalled();
    });
  });
});

