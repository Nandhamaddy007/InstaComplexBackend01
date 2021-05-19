const mongoose = require("mongoose");

var transactionSchema = mongoose.Schema({
  orderId: String,
  products: Array,
  custDetails: Object
});
module.exports = mongoose.model(
  "transaction",
  transactionSchema,
  "transDetails"
);
