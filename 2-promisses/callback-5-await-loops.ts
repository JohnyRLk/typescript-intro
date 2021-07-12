async function fakeRequest5() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Setting data");
      let importantData: string = "Some new data";
      resolve(importantData);
    }, 500);
  });
}

function processData5(data) {
  console.log(`Processing ${data}`);
}

(async () => {
  let value = null;
  for (let i = 0; i < 5; i++) {
    value = await fakeRequest5();
  }
  processData5(value);
})();
