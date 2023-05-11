/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    hash[i] = el;
    for (let j = 1; j < nums.length; j++) {
      const element = nums[j];
      if (hash[i] + element == target && i != j) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([0, 4, 3, 0], 0));
