(function ($) {
  
  describe("Calculator", function() {
  
    var calculator;
    
    beforeEach(function() {
      calculator = new Calculator();
    });
    
    it("should be able to add two numbers together", function() {
      var x = 10;
      var y = 15;
        
      calculator.set(x, y);
      var z = calculator.calculate('+');
        
      expect(z).toEqual(25);        
    });
    
    it("should be able to subtract from a number", function() {
      var x = 10;
      var y = 3;
        
      calculator.set(x, y);
      var z = calculator.calculate('-');
        
      expect(z).toEqual(7);
    });
    
    it("should be able to multiply two numbers", function() {
      var x = 5;
      var y = 6;
        
      calculator.set(x, y);
      var z = calculator.calculate('*');
        
      expect(z).toEqual(30);
    });
    
    it("should be able to divide by a number", function() {
      var x = 60;
      var y = 12;
        
      calculator.set(x, y);
      var z = calculator.calculate('/');
        
      expect(z).toEqual(5);
    });
    
    describe("Spies", function() {
        
      it("should be able to call add() from calculate()", function() {
        spyOn(calculator, 'add');
        
        var x = 10;
        var y = 15;

        calculator.set(x, y);
        var z = calculator.calculate('+');

        expect(calculator.add).toHaveBeenCalled();
      });
      
    });
    
    // ADDING DOM tests --------------------------------------------------------
    
    describe("DOM", function() {     
      var form;
      
      beforeEach(function() {
        // setup the form variable to be used by the tests
        form = $('form.calc');
      });
      
      it("should be able to add two numbers together via the form", function() {
        var x = 10;
        var y = 15;
    
        // find the x and y inputs, set '+' to the op, then trigger a change
        form.find('[name="x"]').val(x);
        form.find('[name="y"]').val(y);
        form.find('[name="op"]').val('+').trigger('change');
        
        // get the value from the z input, and see if the correct value was set
        var z = form.find('[name="z"]').val();
        expect(parseInt(z)).toEqual(25);        
      });
      
      afterEach(function() {
        // clear/reset the x and y inputs from last tests
        // so it won't affect future tests
        form.find('[name="x"]').val(0);
        form.find('[name="y"]').val(0);
      });
      
    });
  
  });
})(jQuery);