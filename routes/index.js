const express = require('express');
const router = express.Router();
const isloggedin = require("../middlewares/isloggedin");
const productModel = require("../models/product-model"); // import product model

// home page
router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
});

// shop page
router.get("/shop", isloggedin, async (req, res) => {
    
    try {
        const products = await productModel.find(); // fetch all products
        res.render("shop", { products }); // pass products to shop.ejs
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
