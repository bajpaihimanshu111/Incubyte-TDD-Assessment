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
    });
});
