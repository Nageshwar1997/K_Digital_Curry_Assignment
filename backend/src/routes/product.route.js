const express = require("express");
const productRouter = express.Router();

const addProductController = require("../controllers/addProduct.controller");
const getAllProductsController = require("../controllers/getAllProducts.controller");
const updateProductController = require("../controllers/updateProduct.controller");

productRouter.post("/add-product", addProductController);
productRouter.get("/get-products", getAllProductsController);
productRouter.put("/update-product/:id", updateProductController);

module.exports = productRouter