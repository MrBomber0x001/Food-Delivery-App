const { Schema, model } = require("mongoose");
const { categorySchema } = require("./index");
const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  size: {
    type: String,
  },
  // category: categorySchema,
});

const Menu = model("menus", menuSchema);
module.exports = Menu;
