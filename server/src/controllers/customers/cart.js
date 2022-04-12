// updateCart receives the pizzaObject from client and add it to the cart of the current logged in user, our cart will be on the user session
exports.updateCart = (req, res, next) => {
  // let cart = {
  //   items: {
  //     pizzaId: { item: pizzaObject, qty: 0 },
  //     pizzaId: { item: pizzaObjet, qty: 0 },
  //   },
  //   totalQty: 0,
  //   totalPrice: 0,
  // };

  const { _id: productId } = req.body;
  if (!req.session.cart) {
    req.session.cart = {
      items: {},
      totalPrice: 0,
      totalQty: 0,
    };
  }
  let cart = req.session.cart;
  if (!cart.items[req.body._id]) {
    cart.items[productId] = {
      item: req.body,
      qty: 1,
    };
    cart.totalQty += 1;
    cart.totalPrice += req.body.price;
  } else {
    cart.items[productId].qty += 1;
    cart.totalQty = cart.totalQty + 1;
    cart.totalPrice += req.body.price;
  }
  console.log(req.body);
  console.log(cart);
  res.json({ success: true, totalQty: req.session.cart.totalQty });
};

exports.cartPage = (req, res, next) => {
  res.render("customers/cart");
};
