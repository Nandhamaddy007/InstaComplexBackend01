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
  shopLogo: Blob,
  ProductDetails: Array
});

module.exports = mongoose.model("shop", shopSchema, "shops");
