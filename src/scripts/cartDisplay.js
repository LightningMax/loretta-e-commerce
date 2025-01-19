const cartDisplay = () => {
  document.addEventListener("DOMContentLoaded", renderCart);
};

const renderCart = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      "<tr><td colspan='5' class='text-center py-4'>Votre panier est vide</td></tr>";
    document.querySelector(".subtotal").textContent = "€0.00";
    return;
  }

  let totalPrice = 0;
  cartItemsContainer.innerHTML = ""; // Clear cart before re-rendering

  cart.forEach((product) => {
    const total = (product.price * product.quantity).toFixed(2);
    totalPrice += parseFloat(total);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="py-4">
        <div class="flex items-center">
          <img class="mr-4 h-16 w-16 object-cover aspect-square rounded-md" src="${product.image}" alt="${product.name}">
          <span class="font-semibold">${product.name}</span>
        </div>
      </td>
      <td class="py-4">€${product.price.toFixed(2)}</td>
      <td class="py-4">
        <div class="flex items-center">
          <button class="decrease-qty mr-2 rounded-md border px-4 py-2" data-name="${product.name}">-</button>
          <span class="w-8 text-center">${product.quantity}</span>
          <button class="increase-qty ml-2 rounded-md border px-4 py-2" data-name="${product.name}">+</button>
        </div>
      </td>
      <td class="py-4">€${total}</td>
      <td class="py-4">
        <button class="remove-item text-red-600" data-name="${product.name}">🗑️</button>
      </td>
    `;

    cartItemsContainer.appendChild(row);
  });

  document.querySelector(".subtotal").textContent = `€${totalPrice.toFixed(2)}`;
  
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productName = event.target.getAttribute("data-name");
      removeItemFromCart(productName);
    });
  });
};

const removeItemFromCart = (productName) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((product) => product.name !== productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

export default cartDisplay;
