import {renderPosts} from "./js/renderPosts"
import {getPosts} from "./js/postApi"
import {renderCreatePostModal} from "./js/renderCreatePostModal.js"
const createPostBtn = document.querySelector(".create-post-btn")
createPostBtn.addEventListener("click", onCreatePostModal)
async function onCreatePostModal(){
    renderCreatePostModal()
}
// Запуск додатку
    async function startUp(){
        await renderPosts()
        const list = document.querySelector(".list")
        console.log(list)
        list.addEventListener("click", onDelPost)
    }
    startUp()
    function onDelPost(e){
        console.log(11)
        if(e.target.classList.contains("deletePostButton")){
            const postId = e.target.dataset.id
            console.log(postId)
        }
    }