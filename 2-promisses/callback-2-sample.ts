function fakeRequest2(callback) {
  const delay = 500;
  setTimeout(function () {
    console.log("Setting data");
    let importantData: string = "Some new data";
    callback(importantData);
  }, delay);
}

function processData2(data) {
  console.log(`Processing ${data}`);
}

fakeRequest2(processData2);
