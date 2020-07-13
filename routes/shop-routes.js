const express = require('express');

const router = express.Router();

router.get("/cart", (req, res, next) => {
    res.render("cart");
});

router.post("/add-to-cart", (req, res, next) => {
    res.render("add-to-cart");
});

router.get("/checkout", (req, res, next) => {
    res.render("checkout");
});

module.exports = router;