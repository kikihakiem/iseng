var iseng = require('../index.js');

describe("Iseng", function() {
  describe("init", function() {
    it("reads buffer into patterns", function() {
      var fakeData = {
        toString: function() { return "foo bar"; }
      };
      spyOn(fakeData, "toString").and.callThrough();
      iseng.init(fakeData);

      expect(fakeData.toString).toHaveBeenCalled();
      expect(iseng.patterns).toEqual("foo bar")
    });
  });
});

