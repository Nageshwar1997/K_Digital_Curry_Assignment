const express = require("express");
const ProductModel = require("../models/product.model");

const productsRouter = express.Router();

productsRouter.post("/add-product", async (req, res) => {
  try {
    const {
      name,
      material,
      grade,
      price,
      details: {
        materialThickness,
        shape,
        surfaceFinish,
        length,
        outsideDiameter,
      },
    } = req.body;

    const product = new ProductModel({
      name,
      material,
      grade,
      price,
      details: {
        materialThickness,
        shape,
        surfaceFinish,
        length,
        outsideDiameter,
      },
    });
    await product.save();
    res.status(201).json({
      message: "Product added successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Failed to add product",
      success: false,
      error: true,
    });
  }
});

productsRouter.get("/get-products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      error: false,
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Failed to fetch products",
      success: false,
      error: true,
    });
  }
});

module.exports = productsRouter;
