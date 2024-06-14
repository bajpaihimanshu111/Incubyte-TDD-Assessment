class Calculator {

    add(numbers) {
        if (numbers === "") {
            return 0;
        }

        const numberArray = numbers.split(',');
        console.log(numberArray)

        if (numberArray.length === 1) {
            return parseInt(numberArray[0], 10);
        }

        if (numberArray.length === 2) {
            const num1 = parseInt(numberArray[0], 10);
            const num2 = parseInt(numberArray[1], 10);
            return num1 + num2;
        }

        throw new Error("Invalid input: More than two numbers are not allowed");
    }
  }
  
  module.exports = Calculator;