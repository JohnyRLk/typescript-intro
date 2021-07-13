let someArray = [1, "string", false];

for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

for (let entry of someArray) {
  console.log(entry);
}

let list = [4, 5, 6];

for (let i in list) {
  console.log(i);
}

for (let i of list) {
  console.log(i);
}

someArray.forEach(function (el, idx) {
  console.log(`idx: ${idx}, el: ${el}`);
});
