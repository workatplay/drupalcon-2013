it("should be able to add two numbers together with the calculator", function() {
    var x = 10;
    var y = 15;
    
    var calculator = new Calculator(x, y);
    var z = calculator.calculate('+');
    
    expect(z).toEqual(25);
});