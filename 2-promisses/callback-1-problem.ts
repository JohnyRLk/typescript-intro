let importantData: string = null
const delay = 500;

function fakeRequest(){
    // Simulate a code delay
    setTimeout( function(){
      console.log("Setting data");
      importantData = "Some new data"
    }, delay );
  }
  
  function processData(data){
    console.log(`Processing ${data}`);
  }

  fakeRequest();
  processData(importantData);