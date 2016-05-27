var iseng = require('../index.js');
var fakeData = " 100 101";
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

    describe("when given non-matching word pattern", function() {
      it("returns false", function() {
        expect(iseng.test("xyz")).toBeFalsy();
      });
    });

    describe("when given matching word pattern", function() {
      it("returns true", function() {
        expect(iseng.test("bar")).toBeTruthy();
      });
    });

    it("calls toPattern function", function() {
      spyOn(iseng, "toPattern");
      var testWord = "foo";
      iseng.test(testWord);

      expect(iseng.toPattern).toHaveBeenCalledWith(testWord);
    });
  });
});

