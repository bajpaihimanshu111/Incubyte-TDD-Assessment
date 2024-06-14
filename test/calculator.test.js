const Calculator = require('../src/calculator');
const calculator = new Calculator();

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return the number itself if only one number is provided', () => {
        expect(calculator.add("1")).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
        expect(calculator.add("10,5")).toBe(15);
    });

    test('should return the sum of n numbers', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
        expect(calculator.add("5,4,7,3,2,9,76,54")).toBe(160);
    });

    test('should return the sum of numbers with new line in the string', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1\n2\n3")).toBe(6);
    });

    test('should return the sum of numbers with delimiter in the string', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('should return an exception when negative number in the string', () => {
        expect(calculator.add("1,2,-3,4")).toBe(4);
    });
});
