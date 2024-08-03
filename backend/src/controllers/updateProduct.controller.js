const ProductModel = require("../models/product.model");

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const { productName, material, grades, details } = req.body;

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

    if (!price) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please provide price",
      });
    }

    if (!details) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please provide Product details",
      });
    }

    const product = await ProductModel.findByIdAndUpdate(
      { _id: id },
      {
        productName,
        material,
        grades,
        price,
        ...req.body,
      }
    );
    res.status(200).json({
      success: true,
      error: false,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: true,
      message: error.message || "Failed to update product",
    });
  }
};

module.exports = updateProductController;