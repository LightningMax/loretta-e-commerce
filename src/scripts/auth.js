export const signIn = () => {
  document.querySelector("#sign-in").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      name,
      prenom,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Vous êtes enregistré!");
  });
};

export const logIn = () => {
  document.querySelector("#login-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("login-email").value;
    const passwordInput = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
      alert("Vous êtes connecté!");
      window.location.replace("/public/index.html")
    } else {
      alert("Informations invalides!");
    }
  });
};
