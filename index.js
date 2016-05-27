var Iseng = function() {};
Iseng.prototype.patterns = null;
Iseng.prototype.init = function(data) {
  this.patterns = data.toString("utf-8");
};
Iseng.prototype.test = function(word) {
  // TODO: convert word to pattern
  var pattern = word;
  return patterns.indexOf(pattern) >= 0;
};
module.exports = new Iseng();

