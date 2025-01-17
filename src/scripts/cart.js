const cart = () => {
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
  });
};

export default cart;
