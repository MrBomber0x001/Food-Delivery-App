const { MenuService } = require("../services");
exports.getOneProduct = async (req, res, next) => {
  try {
    const product = await MenuService.getProductById(req.params.id);
    if (!product) {
      return res.render("404");
    }
    return res.render("product", { product });
  } catch (error) {
    res.status(500).send("Error");
  }
};
