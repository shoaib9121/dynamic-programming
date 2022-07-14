/**
 * Approach 1: Standard approach
 * @param {*} str
 * @returns boolean
 */
const isValid = (str = "") => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let stackLastEl = stack[stack.length - 1];
    let openingBrackets = ["(", "{", "["];
    if (openingBrackets.indexOf(char) !== -1) {
      stack.push(char);
    } else {
      if (
        (stackLastEl === "(" && char === ")") ||
        (stackLastEl === "{" && char === "}") ||
        (stackLastEl === "[" && char === "]")
      ) {
        stack.pop();
      }
    }
  }
  return stack.length ? false : true;
};
// console.log("([])" + " " + isValid("([])"));
// console.log("([)]" + " " + isValid("([)]"));
// console.log("(([]){})" + " " + isValid("(([]){})"));

/**
 * Approach 2: Using a mapper
 * @param {*} str
 * @returns boolean
 */
const isValidUsingMap = (str = "") => {
  if (str.length % 2 !== 0) return false; // we can check if the str.length is even or not. If not we can return false.
  let stack = [];
  let mapper = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (mapper.has(char)) {
      stack.push(mapper.get(char));
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
// console.log("([)]" + " " + isValidUsingMap("([)]"));
// console.log("([])" + " " + isValidUsingMap("([])"));
// console.log("(([]){})" + " " + isValidUsingMap("(([]){})"));

/**
 * Recursion approach under development
 * @param {*} str
 * @param {*} recent
 * @returns
 */
const withRecursion = (str = "", recent = "") => {
  let mapper = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  if (!str.length === 0) return;

  let char = str[0];
  let subS = str.substring(1, str.length - 1);
  if (mapper.has(char)) {
    return char + withRecursion(subS, char);
  } else {
    isPairValid(recent, char);
  }
};
console.log("([)]" + " " + withRecursion("([)]"));
// console.log("([)]" + " " + stack);

const isPairValid = (start, end) => {
  // let mapper = new Map([
  //   [")", "("],
  //   ["}", "{"],
  //   ["]", "["],
  // ]);
  return end.charCodeAt() - start.charCodeAt() > 2 ? false : true;
};
