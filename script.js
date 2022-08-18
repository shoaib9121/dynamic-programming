/**
 * Time complexity is O(n). Calculate squares using two pointers
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquaresOptimalSolution = (nums) => {
  let posPointer = 0,
    negPointer = -1;
  let squares = [];
  while (posPointer < nums.length && nums[posPointer] < 0) {
    posPointer++;
    negPointer = posPointer - 1;
  }

  while (negPointer >= 0 && posPointer < nums.length) {
    if (Math.pow(nums[negPointer], 2) < Math.pow(nums[posPointer], 2)) {
      squares.push(Math.pow(nums[negPointer], 2));
      negPointer--;
    } else {
      squares.push(Math.pow(nums[posPointer], 2));
      posPointer++;
    }
  }

  // push the remaining ones left in negative side
  while (negPointer >= 0) {
    squares.push(Math.pow(nums[negPointer], 2));
    negPointer--;
  }

  // push the remaining ones left in positive side
  while (posPointer < nums.length) {
    squares.push(Math.pow(nums[posPointer], 2));
    posPointer++;
  }

  return squares;
};

/**
 * Time complexity is O(n^2)
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const squared = nums.map((num) => Math.pow(num, 2));

  for (let i = 0; i < squared.length; i++) {
    const curr = squared[i];
    const next = squared[i + 1];
    if (next < curr) {
      [squared[i], squared[i + 1]] = [squared[i + 1], squared[i]];
      for (let j = i; j > 0; j--) {
        const innerCurr = squared[j];
        const innerPrev = squared[j - 1];
        if (innerCurr < innerPrev) {
          [squared[j], squared[j - 1]] = [squared[j - 1], squared[j]];
        }
      }
    }
  }

  return squared;
};

// console.log(sortedSquaresOptimalSolution([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquaresOptimalSolution([-7, -3, 2, 3, 11])); // [4,9,9,49,121]

// console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
// console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
