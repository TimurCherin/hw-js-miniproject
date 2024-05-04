import createPostModalTemplate from "../templates/createPostModalTemplate.hbs"
import { onCreatePost } from "./onCreatePost.js"
const body = document.querySelector("body")
const userName = "Timur"

export async function renderCreatePostModal() {
    body.insertAdjacentHTML('afterbegin', createPostModalTemplate());
    const createPostForm = document.querySelector('#createPostForm');
    createPostForm.addEventListener('submit', onCreatePost);
  }