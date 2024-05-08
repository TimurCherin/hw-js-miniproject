import loginTemplate from "../templates/logIn.hbs"
const body = document.querySelector("body")
const userName = "Timur"
export function renderLogModal(e) {
    body.insertAdjacentHTML('afterbegin', loginTemplate());
    const logInForm = document.querySelector("#logInForm")
    logInForm.addEventListener("submit", onLogIn)
}
const closeModalBtn = document.querySelector("#closeModalBtn")
closeModalBtn.addEventListener("click", onCloseBtn)
function onCloseBtn() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
}
function onLogIn(e) {
    e.preventDefault();
    const data = e.currentTarget.elements;
    const logInName = data.name.value
    const logInPassword = data.password.value
}