function letterCombinations(digits) {
    
    const digitToLetters = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

   
    if (!digits.length) {
        return [];
    }

    const result = [];

    
    function backtrack(index, currentCombination) {
        
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        
        const letters = digitToLetters[digits[index]];

        
        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    }

  
    return result;
}


console.log(letterCombinations("23")); 
console.log(letterCombinations(""));  
console.log(letterCombinations("2"));  
