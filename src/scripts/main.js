const modal1 = document.querySelector(".open-modal");

modal1.onclick = () => {
  const modalId = modal1.getAttribute("data-modal");
  document.getElementById(modalId).classList.remove("hidden");
};

const cm = document.querySelector(".close-modal");
cm.onclick = () => {
  const modalId = cm.getAttribute("data-modal");

  document
    .getElementById(modalId)
    .classList.add("hidden", "ease-out", "duration-300");
};
