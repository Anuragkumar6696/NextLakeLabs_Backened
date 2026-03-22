const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connect = require("./config/db");
const blogRoutes = require("./routes/blog.route");

const app = express();

/* ⭐ VERY IMPORTANT — middleware FIRST */
app.use(cors({
  origin: "*",
}));

app.use(express.json());

/* ⭐ Routes AFTER middleware */
app.use("/api/blog", blogRoutes);

const startServer = async () => {
  try {

    await connect();

    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running`);
    });

  } catch (err) {
    console.log("❌ DB Connection Failed");
  }
};

startServer();