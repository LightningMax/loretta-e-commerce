import renderCart from "./cartDisplay.js";

const cart = () => {
  // Add item to cart
  document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-bag")) {
      const button = event.target;

      const product = {
        name: button.getAttribute("data-name"),
        price: parseFloat(button.getAttribute("data-price")),
        image: button.getAttribute("data-image"),
        quantity: 1,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find((item) => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
    }

    // Clear cart
    if (event.target.id === "clear-cart") {
      localStorage.removeItem("cart");
      document.getElementById("cart-items").innerHTML = "";
      document.querySelector(".subtotal").textContent = "$0.00";
    }

    // Remove item from cart
    if (event.target.classList.contains("remove-item")) {
      const productName = event.target.getAttribute("data-name");
      removeItemFromCart(productName);
    }
  });
};

const removeItemFromCart = (productName) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((product) => product.name !== productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

export default cart;
