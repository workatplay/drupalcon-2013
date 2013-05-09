describe("Calculator", function() {
    
    it("should be able to add two numbers together", function() {
        var x = 10;
        var y = 15;
        
        var calculator = new Calculator(x, y);
        var z = calculator.calculate('+');
        
        expect(z).toEqual(25);
    });
    
    
    it("should be able to subtract from a number", function() {
        var x = 10;
        var y = 3;
        
        var calculator = new Calculator(x, y);
        var z = calculator.calculate('-');
        
        expect(z).toEqual(7);
    });
    
    
    it("should be able to multiply two numbers", function() {
        var x = 5;
        var y = 6;
        
        var calculator = new Calculator(x, y);
        var z = calculator.calculate('*');
        
        expect(z).toEqual(30);
    });
    
    
    it("should be able to divide by a number", function() {
        var x = 60;
        var y = 12;
        
        var calculator = new Calculator(x, y);
        var z = calculator.calculate('/');
        
        expect(z).toEqual(5);
    });
    
});