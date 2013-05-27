/**
 * Caculator object
 */
var Calculator = function (_x, _y) {
  var x = 0;
  var y = 0;
  this.set = function (_x, _y) {
    x = parseFloat(_x);
    y = parseFloat(_y);
    return this;
  };
  this.add = function () {
    return x+y;
  };
  this.subtract = function () {
    return x-y;
  };
  this.multiply = function () {
    return x*y;
  };
  this.divide = function () {
    if (y == 0) {
      return undefined;
    }
    return x/y;
  };
  this.calculate = function (symbol) {
    if (symbol == '+') {
      return this.add();
    } else if (symbol == '-') {
      return this.subtract();
    } else if (symbol == '*') {
      return this.multiply();
    } else if (symbol == '/') {
      return this.divide();
    }
    return undefined;
  };  
  this.set(_x,_y);
};