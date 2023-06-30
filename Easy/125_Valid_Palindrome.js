/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("");
  console.log(str);
  const orig = str.join("");
  const palindrome = str.reverse().join("");
  console.log(orig, palindrome);
  return orig === palindrome;
};

console.log(isPalindrome("0P"));
