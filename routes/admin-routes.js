const express = require('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
    res.render("product");
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.render("add-product", { product:req.body.productname });
});

module.exports = router;