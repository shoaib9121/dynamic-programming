function findMinCost(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const mean = Math.floor(sortedArr.length / 2);
  let minSum = 0; // Total task cost

  if (mean % 2 === 0) {
    sortedArr.splice(mean, 1);
  } else {
    sortedArr.splice(sortedArr.length - 1, 1);
  }
  let leftPointer = 0,
    i = 1;
  let sum = 0;

  while (i <= sortedArr.length / 2) {
    const diff = Math.abs(sortedArr[leftPointer] - sortedArr[leftPointer + 1]);
    sum += diff;
    minSum = sum;
    leftPointer += 2;
    i++;
  }
  return minSum;
}
console.log(`finalCost ${findMinCost([4, 2, 8, 1, 9])}`); // [1,2,8,9], finalTotal=2
console.log(`finalCost ${findMinCost([4, 2, 18, 1, 3, 5, 9])}`); // [ 1, 2, 3, 4, 5, 9 ], fintalTotal=6
