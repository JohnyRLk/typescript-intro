function fakeRequest3() {
  const delay = 500;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Setting data");
      let importantData: string = "Some new data";
      resolve(importantData);
    }, delay);
  });
}

function processData3(data) {
  console.log(`Processing ${data}`);
}

fakeRequest3().then(function (value) {
  processData3(value);
});
