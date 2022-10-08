function findMinCost(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const mean = Math.floor(sortedArr.length / 2);
  let minSum = 0; // Total task cost

  if (mean % 2 === 0) {
    sortedArr.splice(mean, 1);
  } else {
    sortedArr.splice(sortedArr.length - 1, 1);
  }
  console.log(sortedArr);
  let leftPointer = 0;
  let rightPointer = 1;
  let sum = 0;

  while (leftPointer * 2 < sortedArr.length / 2) {
    const diff = Math.abs(sortedArr[leftPointer] - sortedArr[rightPointer]);
    sum += diff;
    console.log(
      `leftPointer ${leftPointer} rightPointer ${rightPointer} sum ${sum} diff ${diff}`
    );
    if (sum < minSum) {
      minSum = sum;
    }
    leftPointer++;
    rightPointer++;
  }

  return minSum;
}
// console.log(`finalCost ${findMinCost([4, 2, 8, 1, 9])}`); // [1,2,4,8,9], 5/2=2
console.log(`finalCost ${findMinCost([4, 2, 18, 1, 3, 5, 9])}`);

// console.log(Math.floor([4, 2, 8, 1, 3, 5, 9].length / 2)); // 7/2=3
// console.log(Math.floor([4, 2, 8, 9, 1, 3, 4, 5, 9].length / 2)); // 9/2=4
// console.log(Math.floor([4, 2, 8, 1, 9].length / 2));
