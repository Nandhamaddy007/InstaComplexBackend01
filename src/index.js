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
  "mongodb+srv://nandhagopal:NandhaAdmin01!@mydb.4lyfk.gcp.mongodb.net/EmployeeDatabase?retryWrites=true&w=majority";
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
  let bytes = CryptoJS.AES.decrypt(req.body.body, "!@#$%^&*()");
  let key = bytes.toString(CryptoJS.enc.Utf8);
  let shopData = JSON.parse(key);
  console.log(shopData);
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
  var data = JSON.stringify({
    shopName: "Ak stores",
    shopOwner: "Arun kumar from backend",
    shopOwnerMobile: "9876543123",
    shopOwnerEmail: "aK@GMAIL.Com",
    shopOwnerAddress: "Chennai",
    shopOwnerInstaId: "Akstores@insta",
    shopOwnerGpay: "123456",
    shopOwnerPaytm: "9877654",
    shopLogo: "",
    ProductDetails: [
      {
        productName: "shirt",
        productColor: "sdsdsd",
        ProductVariance: [
          {
            productPrice: "499",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "599",
            productAvailability: true,
            productSize: "38"
          }
        ]
      },
      {
        productName: "pant",

        productColor: "blue",
        ProductVariance: [
          {
            productPrice: "799",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "899",
            productAvailability: true,
            productSize: "36"
          }
        ]
      },
      {
        productName: "shirt",

        productColor: "sdsdsd",
        ProductVariance: [
          {
            productPrice: "499",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "599",
            productAvailability: true,
            productSize: "38"
          }
        ]
      },
      {
        productName: "pant",
        productColor: "blue",
        ProductVariance: [
          {
            productPrice: "799",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "899",
            productAvailability: true,
            productSize: "36"
          }
        ]
      },
      {
        productName: "shirt",
        productColor: "sdsdsd",
        ProductVariance: [
          {
            productPrice: "499",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "599",
            productAvailability: true,
            productSize: "38"
          }
        ]
      },
      {
        productName: "pant",

        productColor: "blue",
        ProductVariance: [
          {
            productPrice: "799",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "899",
            productAvailability: true,
            productSize: "36"
          }
        ]
      },
      {
        productName: "shirt",

        productColor: "sdsdsd",
        ProductVariance: [
          {
            productPrice: "499",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "599",
            productAvailability: true,
            productSize: "38"
          }
        ]
      },
      {
        productName: "pant",
        productColor: "blue",
        ProductVariance: [
          {
            productPrice: "799",
            productAvailability: true,
            productSize: "32"
          },
          {
            productPrice: "899",
            productAvailability: true,
            productSize: "36"
          }
        ]
      }
    ]
  });
  let ciphertext = CryptoJS.AES.encrypt(data, "!@#$%^&*()").toString();
  res.send({ body: ciphertext });
});

//create a server object:
app.listen(8080, () => console.log("Server started"));
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
