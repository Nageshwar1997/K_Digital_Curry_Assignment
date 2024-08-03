const ProductModel = require("../models/product.model");

const addProductController = async (req, res) => {
  try {
    const { productName, material, grades } = req.body;

    if (!productName) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please provide product name",
      });
    }

    if (!material) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please provide material",
      });
    }

    if (grades.length === 0) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please provide grades",
      });
    }
    const newProduct = new ProductModel({
      productName,
      material,
      grades,
      ...req.body,
    });

    await newProduct.save();
    res.status(201).json({
      success: true,
      error: false,
      message: "Product added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message || "Failed to add product",
    });
  }
};

module.exports = addProductController;
