const Calculator = require('../src/calculator');
const calculator = new Calculator();

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return the number itself if only one number is provided', () => {
        expect(calculator.add("1")).toBe(1);
    });
});
