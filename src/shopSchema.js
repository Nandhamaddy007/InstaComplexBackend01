const mongoose = require("mongoose");
var shopSchema = new mongoose.Schema({
  shopName: String,
  shopOwner: String,
  shopOwnerMobile: Number,
  shopOwnerEmail: String,
  shopOwnerAddress: String,
  shopOwnerInstaId: String,
  shopOwnerGpay: String,
  shopOwnerPaytm: String,
  shopLogo: String,
  ProductDetails: Array
});

module.exports = mongoose.model("shop", shopSchema, "shopdetails");
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
