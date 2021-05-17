//var http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var CryptoJS = require("crypto-js");
var shopModel = require("./shopSchema");
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  //res.header("Access-Control-Allow-Origin",heroku);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var loc =
  "mongodb+srv://nandhagopal:NandhaAdmin01!@mydb.4lyfk.gcp.mongodb.net/InstaComplexTest?retryWrites=true&w=majority";
mongoose.connect(
  loc,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Error! " + error);
    }
  }
);

app.post("/CreateShop", (req, res) => {
  //console.log(req.body);
  let key = dataDecrypt(req.body.body);
  let shopData = JSON.parse(key);
  //console.log(shopData);
  var newShop = new shopModel(shopData);
  newShop.save(function (err, data) {
    if (err) {
      res.send({ err: "Internal server error", code: 500, act: err });
    }
    res.send({ body: "Shop Added Successfully!!!" });
  });
});
app.get("/", (req, res) => {
  res.send("Experss reply");
});
app.get("/GetShop/:ShopID", (req, res) => {
  console.log(req.params.ShopID);
  shopModel.findOne({ shopName: req.params.ShopID }, function (err, data) {
    if (err) {
      res.send({ err: "Internal server error", code: 500, act: err });
    }
    let ciphertext = dataEncrypt(data);
    res.send({ body: ciphertext });
  });
});

function dataEncrypt(data) {
  return CryptoJS.AES.encrypt(data, "!@#$%^&*()").toString();
}
function dataDecrypt(data) {
  let bytes = CryptoJS.AES.decrypt(data, "!@#$%^&*()");
  return bytes.toString(CryptoJS.enc.Utf8);
}

//create a server object:
app.listen(8080, () => console.log("Server started"));
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
