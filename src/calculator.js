class Calculator {

    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        
        let delimiter = ",";
        // Check if the input starts with a custom delimiter definition
        if (numbers.startsWith("//")) {
            const delimiterIndex = numbers.indexOf("\n");
            delimiter = numbers.substring(2, delimiterIndex);
            numbers = numbers.substring(delimiterIndex + 1);
        }
    
        // Split the input string based on the custom delimiter
        const numberArray = numbers.split(new RegExp(`${delimiter}|\n`)).map(Number);
        return numberArray.reduce((sum, number) => sum + number, 0);
    }
}

module.exports = Calculator;