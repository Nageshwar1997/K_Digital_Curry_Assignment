const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    grades: {
      type: [String],
      required: true,
    },
    price: Number,
    details: {
      shape: {
        type: String,
        default: "",
      },
      thickness: {
        type: String,
        default: "",
      },
      surfaceFinish: {
        type: String,
        default: "",
      },
      length: {
        type: String,
        default: "",
      },
      outsideDiameter: {
        type: String,
        default: "",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = productSchema;
