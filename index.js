const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./config/db");
const blogRoutes = require("./routes/blog.route");

const app = express();
app.use("/api/blog", blogRoutes);
app.use(cors());
app.use(express.json());


const startServer = async () => {
  try {

    await connect();

    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });

  } catch (err) {
    console.log("❌ DB Connection Failed");
  }
};

startServer();