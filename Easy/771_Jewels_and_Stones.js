/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const res = {};
  let jew = jewels.split("");
  for (let i of jew) {
    res[i] = 0;
  }

  let stns = stones.split("");

  stns.forEach((stn) => {
    if (stn in res) {
      res[stn] += 1;
    }
  });

  return Object.values(res).reduce((curr, acc) => (acc += curr), 0);
};
