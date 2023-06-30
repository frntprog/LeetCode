/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("");
  const orig = str.join("");
  const palindrome = str.reverse().join("");
  return orig === palindrome;
};

console.log(isPalindrome("0P"));
