/**
 * Time complexity is O(n^2)
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const squared = nums.map((num) => Math.pow(num, 2)); // n

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

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
// console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
