const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    material: {
      type: String,
      required: true,
      trim: true,
      enum: ["stainless steel", "aluminum", "copper", "other"],
    },
    grade: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    details: {
      materialThickness: {
        type: String,
        required: true,
        trim: true,
      },
      shape: {
        type: String,
        required: true,
        trim: true,
        enum: ["round", "square", "other"],
        default: "round",
      },
      surfaceFinish: {
        type: String,
        required: true,
        trim: true,
      },
      length: {
        type: String,
        required: true,
        trim: true,
        enum: ["single", "range", "multiple", "other"],
        default: "single",
      },
      outsideDiameter: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = productSchema;
