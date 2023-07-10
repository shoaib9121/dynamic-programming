const groupAnaGramsWithMap = (strs) => {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));
  const hash = new Map();

  sortedStrs.forEach((item, index) => {
    if (hash.has(item)) {
      const temp = hash.get(item);
      temp.push(strs[index]);
      hash.set(item, temp);
    } else {
      hash.set(item, [item]);
    }
  });
  return Array.from(hash.values());
};

const groupAnaGrams = (strs) => {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));
  const hash = {};

  sortedStrs.forEach((item, index) => {
    if (hash.hasOwnProperty(item)) {
      hash[item].push(strs[index]);
    } else {
      hash[item] = [item];
    }
  });
  return Object.values(hash);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Using simple object", groupAnaGrams(strs));
console.log("Using new Map()", groupAnaGramsWithMap(strs));

/**
 * Find if two strings are anagram
 * str = 'EAT' str1 = `TEA`, 'ATE', 'EAT', 'ETA'
 * str is anagram to str1
 *
 */

// also EAT != ATEE
// Solution with sorting
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedstr1 = str1.split("").sort().join("");
  const sortedstr2 = str2.split("").sort().join("");
  if (sortedstr1 === sortedstr2) {
    return true;
  }
  return false;
}
// Solution without sorting
function checkAnagramWithoutSorting(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (map2.has(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }

  let isValid = true;
  map1.forEach((value, key) => {
    if (map2.get(key) !== value) {
      isValid = false;
    }
  });
  return isValid;
}
console.log("With sorting", checkAnagram("EAT", "TAE")); // true
console.log("With sorting", checkAnagram("EAT", "ATEE")); // false
console.log("Without sorting", checkAnagramWithoutSorting("EAT", "TAE")); // true
