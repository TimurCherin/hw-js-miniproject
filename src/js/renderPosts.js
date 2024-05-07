import postsTemplate from '../templates/post-template.hbs';
import { getPosts } from './postApi.js';
import { onDelPost } from './onDel.js';
import { renderCreatePostModal } from './renderCreatePostModal.js';
import { renderShowPostModal } from './renderShowPostModal.js';
import { renderEditPostModal } from './renderCreatePostModal.js';
const postsContainer = document.querySelector('#postsContainer');

const userName = 'Timur';

export async function renderPosts() {
  const posts = await getPosts();
  postsContainer.innerHTML = postsTemplate({ posts });
  const allPostBtn = document.querySelectorAll(".showPostBtn")
  allPostBtn.forEach(el => el.addEventListener("click", renderShowPostModal))
  const createPostBtn = document.querySelector('.create-post-btn');
  const editPostBtn = document.querySelector(".editPostButton")
  createPostBtn.addEventListener('click', renderCreatePostModal);
  const list = document.querySelector('#postsContainer');
  list.addEventListener('click', onDelPost);
  editPostBtn.addEventListener("click", renderEditPostModal)
}