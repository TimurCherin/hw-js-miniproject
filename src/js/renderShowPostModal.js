import createShowPostModalTemplate from "../templates/createShowPostModalTemplate.hbs"
import { getPostById } from "./postApi.js"
const body = document.querySelector("body")
const userName = "Timur"

export async function renderShowPostModal(e) {
    const postId = e.target.dataset.id
    const currentPost = await getPostById(postId)
    body.insertAdjacentHTML('afterbegin', createShowPostModalTemplate(currentPost));
}