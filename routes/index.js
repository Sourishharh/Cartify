const express = require('express');
const router = express.Router();
const isloggedin = require("../middlewares/isloggedin");
const productModel = require("../models/product-model"); // import product model
const userModel = require('../models/user-model');

// home page
router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error, loggedin:false });
});

// shop page
router.get("/shop", isloggedin, async (req, res) => {
    
    try {
        const products = await productModel.find(); // fetch all products
        let success = req.flash("success")
        res.render("shop", { products,success}); // pass products to shop.ejs
         
    } catch (err) {
        res.send(err.message);
    }
});

router.get("/addtocart/:productid", isloggedin, async (req, res) => {
    try {
        if (!req.user || !req.user.email) {
            req.flash("error", "You must be logged in to add to cart");
            return res.redirect("/shop");
        }

        let user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/shop");
        }

        const productId = req.params.productid;

        // optional: check if product exists
        const product = await productModel.findById(productId);
        if (!product) {
            req.flash("error", "Product not found");
            return res.redirect("/shop");
        }

        // add product to cart
        user.cart.push(productId);
        await user.save();

        req.flash("success", "Added to cart");
        res.redirect("/shop");

    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong");
        res.redirect("/shop");
    }
});


router.get("/cart", isloggedin, async (req, res) => {
    try {
        // Find the logged-in user and populate product details in cart
        let user = await userModel
            .findOne({ email: req.user.email })
            .populate("cart");  // make sure `cart` is an array of ObjectIds in user-model

        let cartProducts = user.cart; // now contains full product objects
        let success = req.flash("success");

        res.render("cart", { cartProducts, success });
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
