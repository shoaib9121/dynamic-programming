const threeSum = (nums = []) => {
  let results = [];
  nums.sort((a, b) => a - b);
  // execute outer loop until second last item(length -2) as we won't be having 3 diff pointers available hence stop the algorithm.
  for (let point1 = 0; point1 < nums.length - 2; point1++) {
    // skip all duplicates from left, point1 > 0 ensures this check is made only from 2nd element onwards
    if (point1 > 0 && nums[point1] === nums[point1 - 1]) {
      continue;
    }

    let point2 = point1 + 1;
    let point3 = nums.length - 1;

    while (point2 < point3) {
      let sum = nums[point1] + nums[point2] + nums[point3];

      if (sum === 0) {
        results.push([nums[point1], nums[point2], nums[point3]]);
        point3--;

        // Skip all duplicates from right
        while (point2 < point3 && nums[point3] === nums[point3 + 1]) point3--;
      } else if (sum > 0) {
        point3--;
      } else {
        point2++;
      }
      // console.log(`sum:$ {sum} pt1:${point1} pt2:${point2} pt3:${point3}`);
    }
  }
  return results;
};
console.log(threeSum([-2, -1, 0, -1, 1]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 1, 1]));
