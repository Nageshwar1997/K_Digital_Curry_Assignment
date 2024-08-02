require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./src/configs/db.config");
const ProductModel = require("./src/models/product.model");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.post("/add-product", async (req, res) => {
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
    res.status(500).json({
      message: error.message || "Failed to add product",
      success: false,
      error: true,
    });
  }
});

server.get("/get-products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      error: false,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to fetch products",
      success: false,
      error: true,
    });
  }
});

server.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log("Server connection error", error);
  }
});
