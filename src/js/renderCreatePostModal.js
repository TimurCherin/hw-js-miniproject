import createPostModalTemplate from "../templates/createPostModalTemplate.hbs"
import {createPost} from "./postApi.js"
import {renderPosts} from "./renderPosts.js"
const body = document.querySelector("body")
const userName = "Timur"
console.log(createPost)

export async function renderCreatePostModal() {
    body.insertAdjacentHTML('afterbegin', createPostModalTemplate());
    const createPostForm = document.querySelector('#createPostForm');
    createPostForm.addEventListener('submit', onCreatePost);
  }
  
  async function onCreatePost(e) {
    e.preventDefault();
    const data = e.currentTarget.elements;
    const newPost = {
      title: data.title.value,
      category: data.category.value,
      text: data.text.value,
      author: userName,
      date: new Date().toLocaleString(),
    };
    await createPost(newPost);
    renderPosts();
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
  }