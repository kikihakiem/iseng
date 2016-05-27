var iseng = require('../index.js');
var fakeData = " foo bar";
var fakeBuffer = {
  toString: function() { return fakeData; }
};

describe("Iseng", function() {
  describe("init", function() {
    it("reads buffer into patterns", function() {
      spyOn(fakeBuffer, "toString").and.callThrough();
      iseng.init(fakeBuffer);

      expect(fakeBuffer.toString).toHaveBeenCalled();
      expect(iseng.patterns).toEqual(fakeData)
    });
  });

  describe("test", function() {
    beforeEach(function() {
      iseng.init(fakeBuffer);
    });

    describe("when supplied with non-english word", function() {
      it("returns false", function() {
        expect(iseng.test("baz")).toBeFalsy();
      });
    });

    describe("when given english word", function() {
      it("returns true", function() {
        expect(iseng.test("bar")).toBeTruthy();
      });
    });
  });
});

