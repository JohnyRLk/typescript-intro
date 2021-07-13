function add(x: number, y: number): number {
  return x + y;
}

let args = [Math.random(), Math.random()];
console.log(add.apply(null, [Math.random(), Math.random()]));
