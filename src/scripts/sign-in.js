const login = document.querySelector('#login');
const signInBtn = document.querySelector('#sign-in-btn');
const logInBtn = document.querySelector('#login-btn');
const signIn = document.querySelector('#sign-in');

signInBtn.onclick = () => {
    login.classList.toggle('hidden');
    signIn.classList.toggle('hidden');
    signIn.classList.add('flex');
};

logInBtn.onclick = () => {
    login.classList.toggle('hidden');
    signIn.classList.toggle('hidden');
    logInBtn.classList.add('flex');
};