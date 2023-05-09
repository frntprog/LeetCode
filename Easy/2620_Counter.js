var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter(5));
console.log(counter(5));
console.log(counter(5));
