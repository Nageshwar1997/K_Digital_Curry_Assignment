const ProductModel = require("../models/product.model");

const getAllProductsController = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      success: true,
      error: false,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message || "Failed to fetch products",
    });
  }
};

module.exports = getAllProductsController;