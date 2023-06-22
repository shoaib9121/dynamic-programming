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
