const cartDisplay = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;
    const cartSummary = document.querySelector(".summary");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        "<tr><td colspan='4' class='text-center py-4'>Votre panier est vide</td></tr>";
      return;
    }

    let totalPrice = 0;

    cart.forEach((product) => {
      const total = (product.price * product.quantity).toFixed(2);
      totalPrice += parseFloat(total);

      const row = document.createElement("tr");
      row.innerHTML = `
                <td class="py-4">
                    <div class="flex items-center">
                        <img class="mr-4 h-16 w-16" src="${product.image}" alt="${product.name}">
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
                <td class="py-4">$${total}</td>
            `;
      cartItemsContainer.appendChild(row);
    });

    const grandTotal = totalPrice.toFixed(2);
    document.querySelector(".subtotal").textContent =
      `€${totalPrice.toFixed(2)}`;
  });
};

export default cartDisplay;
