const unorderArr = [13, 12, 1, 6, 9, 0];

const sortEvenOdd = (arr) => {
  const setArr = new Set(arr);
  const sortedArr = Array.from(setArr).sort((a, b) => a - b);

  let oddArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const cI = sortedArr[i];
    if (cI % 2 !== 0) {
      oddArr.push(cI);
      sortedArr.splice(i, 1);
    }
  }
  return [...sortedArr, ...oddArr];
};

/**
 * Through divide-and-conquer(Quick Sort) approach
 */
const sortEvenOddWithQuickSort = (arr) => {
  let highIndex = arr.length - 1;
  let pivot = arr[highIndex];

  for (let i = -1, j = 0; j < arr.length; j++) {
    const cI = arr[j];
    if (cI < pivot) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    } else {
      pivot = arr[j];
      arr[j] = arr[highIndex];
    }
    i++;
  }
  return arr;
};

console.log(sortEvenOdd(unorderArr));
// console.log(sortEvenOddWithQuickSort(unorderArr));
