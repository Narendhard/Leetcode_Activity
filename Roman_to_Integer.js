function romanToInt(s) {
    
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    
    for (let i = 0; i < s.length; i++) {
        
        if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }

    return total;
}


console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV")); 