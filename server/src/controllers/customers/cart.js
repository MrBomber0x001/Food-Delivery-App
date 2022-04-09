exports.updateCart = (req, res, next) => {
  res.json({ msg: "All is ok", data: req.body });
};

exports.getCart = (req, res, next) => {
  res.render("customers/cart");
};
