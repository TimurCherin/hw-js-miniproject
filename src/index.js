import { renderPosts } from "./js/renderPosts"
import { renderLogModal } from "./js/logIn"
import { getCurrentUser } from "./js/getCurrentUser.js"
const userName = getCurrentUser()
console.log(userName)
const logIn = document.querySelector(".log_in")
logIn.addEventListener("click", renderLogModal)
// Запуск додатку
renderPosts()