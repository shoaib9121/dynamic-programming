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
console.log(`${isPalindrome("level")}`); // true
console.log(`${isPalindrome("335533")}`); // true
console.log(`${isPalindrome("shoaib")}`); // false
