const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.User;
const Product = models.Product;

router.get("/", async (req, res, next) => {
  try {
    console.log(req.body.data);
    const users = await User.findAll();
    const response = {
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      phone: users.phone,
    };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const foundUser = await User.findByPk(id);
    res.status(200).json(foundUser);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      email,
    });

    console.log("req.body", req.body);

    res.status(200).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const toUpdateUser = await User.findByPk(id);
    if (toUpdateUser) {
      const { email, phone } = req.body;
      const updatedUser = await toUpdateUser.update({
        email,
        phone,
      });
      res.status(200).json(updatedUser);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDeleteUser = await User.findByPk(id);
    if (toDeleteUser) {
      const deletedUser = await toDeleteUser.destroy();
      res.status(200).json(deletedUser);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
