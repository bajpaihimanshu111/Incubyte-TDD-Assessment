class Calculator {

    add(numbers) {
        if (numbers === "") {
            return 0;
        }
    
        // Split the input string based on commas and new lines
        const numberArray = numbers.split(/,|\n/).map(Number);
        return numberArray.reduce((sum, number) => sum + number, 0);
    }
  }
  
  module.exports = Calculator;