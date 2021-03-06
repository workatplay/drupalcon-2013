describe("Calculator", function() {
    var calculator;
    
    // ADDING a setup function (beforeEach) ------------------------------------
    // To create our calculator object for each test in the suite --------------
    
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
    
});