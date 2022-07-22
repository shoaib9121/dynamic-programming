/**
 * Write a method that verifies if the passed input/string is found in the dictionary
 */

const dictionary = ["cat", "dog", "bil"];

/**
 * Solution:1
 * Using RegExp
 */
// const isInDict = (word) => {
//   return dictionary.some((dict) => {
//     const regexTemplate = word.replace("*", ".");
//     const regex = new RegExp(`^${regexTemplate}$`);
//     return regex.test(dict);
//   });
// };
// Time complexity: O(n), because each time when isInDict is invoked it will will iterate through each dictionary item. Where `n` relates to length of dictionary;

/**
 * Solution:2
 * Without using RegExp
 */
const wordMap = dictionary.reduce((acc, word) => {
  acc[word] = true;
  word.split("").forEach((letter, i) => {
    const start = word.slice(0, i);
    const end = word.slice(i + 1);
    const partialWord = `${start}*${end}`;
    acc[partialWord] = true;
  });
  return acc;
}, {});
const optimizedDict = wordMap;
const isInDict = (word) => {
  return !!optimizedDict[word];
};
// Time complexity: O(1), because each time when isInDict is invoked it will will to look once in the optimizedDict;

console.log(isInDict("cat"));
console.log(isInDict("d*g"));
console.log(isInDict("bool"));

// const regex = new RegExp(/\*/, "g");
// const str = "*example*";
// const str1 = str.replace(regex, "");
// console.log(str1); // Output: example
