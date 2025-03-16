import cart from "./features/cart/cart.js";
import renderCart from "./features/cart/cartDisplay.js";
import modal from "./utils/modal.js";
import { logIn, signIn } from "./features/auth/auth.js";
import toogleAuth from "./features/auth/sign-in.js";
import loadNavbar from "./utils/loadNavbar.js";
import loadFooter from "./utils/loadFooter.js"

const App = () => {
  document.addEventListener("DOMContentLoaded", () => {
    modal();
    cart();
    renderCart();
    // loadNavbar();
    // loadFooter();
    toogleAuth();
    signIn();
    logIn();
  });
};

App();
