const pascalToSentenceCase = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    let char = str.charAt(i);
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (i > 0) {
        str = replaceCharAt(str, i, char.toLowerCase());
      }
    }
  }
  return str;
};

const replaceCharAt = (str, index, replacement) => {
  return str.substring(0, index) + " " + replacement + str.substring(index + 1);
};
// console.log(`a-z ${"a".charCodeAt(0)} ${"z".charCodeAt(0)}`);
// console.log(`A-Z ${"A".charCodeAt(0)} ${"Z".charCodeAt(0)}`);
console.log(pascalToSentenceCase("ThisIsPascalCase")); // This is pascal case
