const router = require("express").Router();
const { homeController } = require("../../controllers");
const { getAllProduct } = homeController;
router.get("/", getAllProduct);

module.exports = router;
