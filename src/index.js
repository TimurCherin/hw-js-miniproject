import { renderPosts } from "./js/renderPosts"
import { renderLogModal } from "./js/logIn"
import { getCurrentUser } from "./js/getCurrentUser.js"
import { logOut } from "./js/logOut.js"
const userName = getCurrentUser()
const userBlock = document.querySelector(".user-block")


if (userName) {
    userBlock.innerHTML = `
    <p class="font-medium">${userName}</p>
    <a class="log_out cursor-pointer text-gray-800 dark:text-white bg-gray-200  hover:bg-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log out</a>  
    `;
    const logOutBtn = document.querySelector(".log_out")
    logOutBtn.addEventListener("click", logOut)
} else {
    const logIn = document.querySelector(".log_in")
    logIn.addEventListener("click", renderLogModal)
    const createPostinfo = document.querySelector(".createPostinfo")
    const createPostBtn = document.querySelector(".create-post-btn")
    createPostinfo.classList.remove("hidden")
    createPostBtn.classList.add("hidden")
}
// Запуск додатку
renderPosts()