const { ProductService } = require("../services");

exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await ProductService.findAll();
    res.render("home", { products });
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};
