const add = function (...args: number[]): number {
  return args.reduce(function (a, b) {
    return a + b;
  });
};
console.log(add(1, 2, 324, 5, 1));
console.log(add(Math.random(), Math.random()));
export { add };


