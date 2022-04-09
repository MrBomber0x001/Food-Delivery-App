const productRoutes = require("./product");
const customerRoutes = require("./customer");
const cartRoutes = require("./cart");
const authRoutes = require("./auth");
const homeRoutes = require("./home");
//const error = require("../middlewares");
function initRoutes(app, express) {
  app.use("/products", productRoutes);
  app.use("/customers", customerRoutes);
  app.use("/cart", cartRoutes);
  app.use("/auth", authRoutes);
  app.use("/", homeRoutes);
  // app.use(error);
}

module.exports = initRoutes;
