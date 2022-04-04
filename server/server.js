const express = require("express");
const app = express();
//const expressLayout = require("express-ejs-layouts");
const path = require("path");
require("dotenv").config();

const { PORT } = Number(process.env) || 4000;
console.log(PORT);
// Templates
//app.use(expressLayout);
app.use(express.static("public"));
app.set("views", path.join(__dirname, "../resources/views"));
app.set("view engine", "ejs");
// routes

app.get("/home", (req, res) => {
  res.render("home");
});
app.listen(3000, () => {
  console.log(`🚀 server is running on: http://localhost:${3000}`);
});
