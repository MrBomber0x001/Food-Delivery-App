const router = require("express").Router();
const { cartController } = require("../../controllers");
const { getCart, updateCart } = cartController;
//TODO: choose suitable names and method
router.get("/cart", getCart);
router.post("/update-cart", updateCart);

module.exports = router;
