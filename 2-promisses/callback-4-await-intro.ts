async function fakeRequest4() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Setting data");
      let importantData: string = "Some new data";
      resolve(importantData);
    }, 500);
  });
}
function processData4(data) {
  console.log(`Processing ${data}`);
}
(async () => {
  let value = await fakeRequest4();
  processData4(value);
})();
