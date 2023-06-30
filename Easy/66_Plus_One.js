/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const sum = digits.reduce((acc, curr) => (acc += curr), "");
  console.log("sum", BigInt(sum));
  const res = BigInt(sum) + 1n + "";
  console.log("res", res);
  return res.split("").map((el) => (typeof +el == "number" ? +el : null));
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
