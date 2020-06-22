const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.User;
const Product = models.Product;

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
