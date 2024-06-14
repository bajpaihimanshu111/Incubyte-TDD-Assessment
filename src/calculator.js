class Calculator {

    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        
        const numberArray = numbers.split(',').map(Number);
        return numberArray.reduce((sum, number) => sum + number, 0);
    }
  }
  
  module.exports = Calculator;