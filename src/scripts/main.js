import cart from "./cart.js";
import renderCart from "./cartDisplay.js";
import modal from "./modal.js";
import loadNavbar from "./loadNavbar.js";
import loadFooter from "./loadFooter.js";

const App = () => {
  document.addEventListener("DOMContentLoaded", () => {
    modal();
    cart();
    renderCart();
    loadNavbar();
    loadFooter();
  });
};

App();
