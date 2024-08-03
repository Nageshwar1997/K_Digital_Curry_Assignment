require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./src/configs/db.config");
const productRouter = require("./src/routes/product.route");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["get", "post", "put", "delete"],
  })
);

const PORT = process.env.PORT || 5000;

app.use("/api", productRouter);

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Server is not running", error);
  }
});
