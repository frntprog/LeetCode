/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  const distinctWays = new Array(n + 1);
  distinctWays[0] = 1;
  distinctWays[1] = 1;
  for (let i = 2; i <= n; i++) {
    distinctWays[i] = distinctWays[i - 1] + distinctWays[i - 2];
  }
  return distinctWays[n];
}

console.log(climbStairs(4));
