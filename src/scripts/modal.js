const modal = () => {
  const modal = document.querySelectorAll(".open-modal");
  modal.forEach((modal) => {
    modal.onclick = () => {
      const modalId = modal.getAttribute("data-modal");
      document.getElementById(modalId).classList.remove("hidden");
    };

    const closeModal = document.querySelectorAll(".close-modal");
    closeModal.forEach((button) => {
      button.onclick = () => {
        const modalId = button.getAttribute("data-modal");

        document.getElementById(modalId).classList.add("hidden");
      };
    });
  });
};

export default modal;
