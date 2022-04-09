const router = require("express").Router();
const { productController } = require("../../controllers");
const { getOneProduct } = productController;

router.get("/:id", getOneProduct);

module.exports = router;
