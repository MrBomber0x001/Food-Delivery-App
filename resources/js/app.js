import axios from "axios";
const addToCart = document.querySelectorAll(".add-to-cart");
console.log("wlcome");
addToCart.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
  });
});

const updateCart = (pizza) => {
  axios.post("/update-cart", pizza).then((res) => {
    console.log(res);
  });
};
