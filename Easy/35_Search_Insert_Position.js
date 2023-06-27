/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.find((el) => el == target)) {
    return nums.indexOf(target);
  }
  nums.push(target);
  nums.sort((a, b) => {
    return a - b;
  });
  return nums.indexOf(target);
};

console.log(searchInsert([1, 3, 5, 6], 2));
