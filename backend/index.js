require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./src/configs/db.config");
const productsRouter = require("./src/routes/products.route");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.use("/api/products", productsRouter);

server.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log("Server connection error", error);
  }
});
