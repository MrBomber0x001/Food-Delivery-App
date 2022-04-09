const Product = require("../models/product.model");
class ProductService {
  static async findAll() {
    try {
      const products = await Product.find();
      return products;
    } catch (e) {
      throw new Error(`Unable to Retrieve Menu items`, e);
    }
  }
  static async getProductById(id) {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      throw new Error(`Unable to retrieve product`);
    }
  }
}
module.exports = ProductService;
