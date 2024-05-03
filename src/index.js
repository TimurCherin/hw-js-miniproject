import {renderPosts} from "./js/renderPosts"
import {getPosts, deletePost} from "./js/postApi"
import {renderCreatePostModal} from "./js/renderCreatePostModal.js"
const createPostBtn = document.querySelector(".create-post-btn")
createPostBtn.addEventListener("click", onCreatePostModal)
async function onCreatePostModal(){
    renderCreatePostModal()
}
// Запуск додатку
    async function startUp(){
        await renderPosts()
        const list = document.querySelector("#postsContainer")
        list.addEventListener("click", onDelPost)
    }
    startUp()
    async function onDelPost(e){
        if(e.target.classList.contains("deletePostButton")){
            const postId = e.target.dataset.id
            await deletePost(postId)
            renderPosts()
        }
    }