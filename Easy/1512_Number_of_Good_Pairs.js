/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs.length;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
