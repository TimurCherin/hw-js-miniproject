import postsTemplate from '../templates/post-template.hbs';
import { getPosts } from './postApi.js';
import { onDelPost } from './onDel.js';
import { renderCreatePostModal } from './renderCreatePostModal.js';
import { renderShowPostModal } from './renderShowPostModal.js';
import { onEditPost } from './onEditPost.js';
import { renderEditPostModal } from './renderCreatePostModal.js';
import { getCurrentUser } from './getCurrentUser.js';
const postsContainer = document.querySelector('#postsContainer');

const userName = getCurrentUser();

export async function renderPosts() {
  const posts = await getPosts();
  postsContainer.innerHTML = postsTemplate({ posts, userName });
  const allPostBtn = document.querySelectorAll(".showPostBtn")
  allPostBtn.forEach(el => el.addEventListener("click", renderShowPostModal))
  const createPostBtn = document.querySelector('.create-post-btn');
  createPostBtn.addEventListener('click', renderCreatePostModal);
  const list = document.querySelector('#postsContainer');
  list.addEventListener('click', onDelPost);
  list.addEventListener('click', onEditPost);
}