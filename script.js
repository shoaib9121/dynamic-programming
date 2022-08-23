/**
 * Time complexity is O(n)
 * @param {number[]} nums
 * @param {sequence[]} nums
 * @return {number[]}
 */
const isValidSubsequence = (nums, sequence) => {
  let sequenceIndex = 0;
  for (const num of nums) {
    if (sequence[sequenceIndex] === num) {
      sequenceIndex++;

      if (sequenceIndex === sequence.length) return true;
    }
  }
  return false;
};

// console.log(isValidSubsequence([1, 2, 3, 4], [2, 4])); // true
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
