import cart from "./cart.js";
import renderCart from "./cartDisplay.js";
import modal from "./modal.js";
import loadNavbar from "./loadNavbar.js";
import loadFooter from "./loadFooter.js";
import toogleAuth from "./sign-in.js";
import { logIn, signIn } from "./auth.js";

const App = () => {
  document.addEventListener("DOMContentLoaded", () => {
    modal();
    cart();
    renderCart();
    loadNavbar();
    loadFooter();
    toogleAuth();
    signIn();
    logIn();
  });
};

App();
