function isPalindrome(x) {
    
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

   
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10); 
    }

   
    return x === reversed || x === Math.floor(reversed / 10);
}


console.log(isPalindrome(121));   
console.log(isPalindrome(-121));  
console.log(isPalindrome(10));    
console.log(isPalindrome(0));     
console.log(isPalindrome(1221));  
