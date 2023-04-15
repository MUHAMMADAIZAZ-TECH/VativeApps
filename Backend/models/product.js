const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ProductSchema = new Schema({
  id: { type: String, required: true},
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Price: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = { Product };

