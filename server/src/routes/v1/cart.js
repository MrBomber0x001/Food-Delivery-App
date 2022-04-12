const router = require("express").Router();
const { cartController } = require("../../controllers");
const { cartPage, updateCart } = cartController;
//TODO: choose suitable names and method
router.route("/").get(cartPage).post(updateCart);

module.exports = router;
