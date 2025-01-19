const login = document.querySelector("#login");
const signInBtn = document.querySelector("#sign-in-toggle");
const logInBtn = document.querySelector("#login-toggle");
const signIn = document.querySelector("#sign-in");

const toggleAuth = () => {
  signInBtn.onclick = () => {
    login.classList.add("hidden");
    login.classList.remove("flex");
    
    signIn.classList.remove("hidden");
    signIn.classList.add("flex");
  };

  logInBtn.onclick = () => {
    signIn.classList.add("hidden");
    signIn.classList.remove("flex");

    login.classList.remove("hidden");
    login.classList.add("flex");
  };
};

export default toggleAuth;
