let finalArr = [];

const flattenArrUsingRecurrsion = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArrUsingRecurrsion(item);
    } else {
      finalArr.push(item);
    }
  });
  return finalArr;
};

const flattenArrUsingReduce = (arr) => {
  return arr.reduce((sum, acc) => sum.concat(acc), []);
};

console.log(flattenArrUsingRecurrsion(["a", "b", ["c", "d", ["e", "f"]]]));
console.log(flattenArrUsingReduce(["a", "b", ["c", "d", ["e", "f"]]]));
