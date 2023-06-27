function isPalindrome(str) {
  let isValid = true;
  let reverseStr = str.split("").reverse().join("");

  for (let i = 0; i < str.length - 1, (char = str.charAt(i)); i++) {
    if (reverseStr.charAt(i) !== char) {
      return false;
    }
  }
  return isValid;
}

function getPalindrome(str) {
  // Create a character frequency map
  const charMap = {};
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Check the count of characters with odd frequencies
  let oddCount = 0;
  let palindrome = "";

  for (let char in charMap) {
    if (charMap[char] % 2 !== 0) {
      if (oddCount > 0) {
        return false; // More than one character with odd frequency, not possible to form a palindrome
      }
      oddCount++;
      palindrome += char;
    } else {
      palindrome += char.repeat(charMap[char] / 2);
    }
  }
  const temp = !!oddCount ? palindrome.substring(0, palindrome.length - 1) : palindrome;
  return temp + palindrome.split("").reverse().join("");
}

// Test cases
console.log(getPalindrome("12132")); // Output: '12321'
console.log(getPalindrome("12345")); // Output: false
console.log(getPalindrome("1221")); // Output: '1221'
console.log(getPalindrome("123321")); // Output: '123321'
console.log(getPalindrome("353533")); // Output: '335533'
console.log(`${isPalindrome("shoaib")}`); // false
console.log(getPalindrome("fataft")); // Output: '123321'
