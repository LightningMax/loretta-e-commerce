const loadNavbar = () => {
  fetch("/src/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#navbar").innerHTML = data;

      const navbar = document.querySelector("#navbar");
      const page = window.location.pathname;

      if (page.includes("index.html")) {
        const hrefs = navbar.querySelectorAll("a");
        hrefs.forEach((href) => {
          href.classList.replace("text-gray-900", "text-gray-50");
        });
      }
    });
};

export default loadNavbar;
