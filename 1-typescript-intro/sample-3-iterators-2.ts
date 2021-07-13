

let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.splice(0, 1);

let biggerThan3 = arr.filter(function (el) {
  return el > 3;
});
console.log(biggerThan3);

let multipliedBy3 = arr.map(function (el) {
  return el * 3;
});
console.log(multipliedBy3);

let multipliedBy3Bis = arr.map((el, idx) => {
  return el * idx;
});
console.log(multipliedBy3Bis);

let reducedArr = arr.reduce(function (acc, el) {
  return acc + el;
}, 0);
console.log(reducedArr);


