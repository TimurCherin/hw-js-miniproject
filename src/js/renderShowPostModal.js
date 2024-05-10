import createShowPostModalTemplate from "../templates/createShowPostModalTemplate.hbs"
import { getPostById } from "./postApi.js"
import { onAddComment } from "./onAddComment.js"
import { getCurrentUser } from "./getCurrentUser.js"
const body = document.querySelector("body")
const userName = getCurrentUser()

export async function renderShowPostModal(e) {
    const postId = e.target.dataset.id
    const currentPost = await getPostById(postId)
    body.insertAdjacentHTML('afterbegin', createShowPostModalTemplate({ currentPost, userName }));
    const commentForm = document.querySelector('.createCommentForm');
    commentForm.addEventListener('submit', onAddComment);
    const closeModalBtn = document.querySelector("#closeModalBtn")
    closeModalBtn.addEventListener("click", onCloseBtn)
    function onCloseBtn() {
        const backdrop = document.querySelector('.backdrop');
        backdrop.remove();
    }
}
