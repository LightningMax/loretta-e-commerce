const loadFooter = () => {
  fetch("/src/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footer = document.querySelector("#footer");
      footer.innerHTML = data;
    });
};

export default loadFooter;
