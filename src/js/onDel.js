import {deletePost} from "./postApi"
import { renderPosts } from "./renderPosts"

export async function onDelPost(e){
    if(e.target.classList.contains("deletePostButton")){
        const postId = e.target.dataset.id
        await deletePost(postId)
        renderPosts()
    }
}