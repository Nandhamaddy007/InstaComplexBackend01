//var http = require("http");
const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Experss reply");
});
app.get("/hello", (req, res) => {
  res.send("Hello reply");
});
//create a server object:
app.listen(8080, () => console.log("Server started"));
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
