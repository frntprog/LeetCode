Array.prototype.last = function () {
  return !this.length ? -1 : this.at(-1);
};

const arr = [1, 2, 3];
const empty = [];
console.log(arr.last());
console.log(empty.last());
