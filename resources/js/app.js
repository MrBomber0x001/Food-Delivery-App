import axios from "axios";
import Noty from "noty";
const addToCart = document.querySelectorAll(".add-to-cart");
const cartCounter = document.querySelector("#cartCounter");
console.log("wlcome");
addToCart.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
  });
});

const updateCart = async (pizza) => {
  try {
    const res = await axios.post("/cart", pizza);
    if(res){
      cartCounter.innerText = res.data.totalQty;
      showNotification("success", `Item ${pizza.name} added to the cart`);
    }
  } catch (error) {
    console.log(error);
    showNotification("error", "Something went wrong!");
  }

};


const showNotification =(status, message) => {
  new Noty({
    type: status,
    text: message,
    timeout: 1000,
  }).show()
}
