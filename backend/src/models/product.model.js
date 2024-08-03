const mongoose = require("mongoose");
const productSchema = require("../schemas/product.schema");

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
