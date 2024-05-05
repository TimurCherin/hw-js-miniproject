import createPostModalTemplate from "../templates/createPostModalTemplate.hbs"
import { onCreatePost } from "./onCreatePost.js"
const body = document.querySelector("body")
const userName = "Timur"

export async function renderCreatePostModal() {
  body.insertAdjacentHTML('afterbegin', createPostModalTemplate());
  const closeModalBtn = document.querySelector("#closeModalBtn")
  closeModalBtn.addEventListener("click", onCloseBtn)
  function onCloseBtn() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
  }
  const createPostForm = document.querySelector('#createPostForm');
  createPostForm.addEventListener('submit', onCreatePost);
}