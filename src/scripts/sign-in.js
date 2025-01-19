const login = document.querySelector("#login");
const signInBtn = document.querySelector("#sign-in-btn");
const logInBtn = document.querySelector("#login-btn");
const signIn = document.querySelector("#sign-in");

console.log(login);
console.log(signIn);
console.log(logInBtn);
console.log(signInBtn);

const toogleAuth = () => {
  signInBtn.onclick = () => {
    login.classList.toggle("hidden");
    signIn.classList.toggle("hidden");
    signIn.classList.add("flex");
  };

  logInBtn.onclick = () => {
    login.classList.toggle("hidden");
    signIn.classList.toggle("hidden");
    logInBtn.classList.add("flex");
  };
};

export default toogleAuth;
