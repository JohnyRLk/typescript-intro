import * as https from "https";

let params = {
  host: "reqres.in",
  port: 443,
  method: "GET",
  path: "/api/users",
};

var req = https.request(params, function (res) {
  var body: string[] = [];
  res.on("data", function (chunk) {
    body.push(chunk);
  });

  res.on("end", function () {
    console.log(`Received: ${body}`);
  });

  req.on("error", function (err) {
    console.log(err);
  });
});
req.end();

console.log("Data received");
