let mix = require("laravel-mix");

mix
  .js("resources/js/app.js", "public/js/app.js")
  .sass("resources/scss/main.scss", "public/css/main.css");
