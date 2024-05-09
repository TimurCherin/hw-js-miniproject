import loginTemplate from "../templates/logIn.hbs"
import { createUser, getUsers } from "./postApi";
const body = document.querySelector("body")
const userName = "Timur"
export function renderLogModal(e) {
    body.insertAdjacentHTML('afterbegin', loginTemplate());
    const logInForm = document.querySelector("#logInForm")
    logInForm.addEventListener("submit", onLogIn)
    const closeModalBtn = document.querySelector("#closeModalBtn")
    closeModalBtn.addEventListener("click", onCloseBtn)
    function onCloseBtn() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.remove();
    }
}
async function onLogIn(e) {
    e.preventDefault();
    const data = e.currentTarget.elements;
    const logInName = data.name.value
    const logInPassword = data.password.value
    const newUser = {
        "name": logInName,
        "password": logInPassword
    }
    const users = await getUsers()
    const currentUser = users.find(user => user.name === logInName);
    if (currentUser) {
        if (currentUser.password === logInPassword) {
            alert(`Wellcome ${logInName}`)
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        } else {
            alert("Wrong password")
        }
    } else {
        createUser(newUser)
        localStorage.setItem("currentUser", JSON.stringify(newUser));
    }
    logInForm.reset()
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
    location.reload();
}