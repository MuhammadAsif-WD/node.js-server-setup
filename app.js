const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// route hit
app.get("/", (req, res, next) => {
  res.send("Route is working successfully");
});

module.exports = app;
