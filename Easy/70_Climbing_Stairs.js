/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // Base cases for 0 and 1 step
  if (n === 0 || n === 1) {
    return 1;
  }

  // Array to store the distinct ways for each step
  const distinctWays = new Array(n + 1);

  // Initializing the base cases
  distinctWays[0] = 1;
  distinctWays[1] = 1;

  // Calculating distinct ways for each step
  for (let i = 2; i <= n; i++) {
    distinctWays[i] = distinctWays[i - 1] + distinctWays[i - 2];
  }

  // Returning the distinct ways for climbing n steps
  return distinctWays[n];
}

console.log(climbStairs(4));
