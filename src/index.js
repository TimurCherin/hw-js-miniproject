import { renderPosts } from "./js/renderPosts"
import { renderLogModal } from "./js/logIn"
const logIn = document.querySelector(".log_in")
logIn.addEventListener("click", renderLogModal)
// Запуск додатку
renderPosts()