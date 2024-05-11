import postsTemplate from '../templates/post-template.hbs';
import { getPosts } from './postApi.js';
import { onDelPost } from './onDel.js';
import { renderCreatePostModal } from './renderCreatePostModal.js';
import { renderShowPostModal } from './renderShowPostModal.js';
import { onEditPost } from './onEditPost.js';
import { renderEditPostModal } from './renderCreatePostModal.js';
import { getCurrentUser } from './getCurrentUser.js';
const postsContainer = document.querySelector('#postsContainer');
const simpleSearch = document.querySelector("#simple-search")
simpleSearch.addEventListener("change", onSearch)
let searchQuery;
const userName = getCurrentUser();


export async function renderPosts(filteredPosts = "") {
  let posts = await getPosts();
  if (filteredPosts) {
    if (filteredPosts.length === 0) {
      postsContainer.innerHTML = `<p class="text-xl leading-7 text-gray-500 mt-5"> Sorry, there are no posts with query "${searchQuery}"</div > </p>  `
    } else {
      posts = filteredPosts
      postsContainer.innerHTML = postsTemplate({ posts, userName });
    }
  } else {
    postsContainer.innerHTML = postsTemplate({ posts, userName });
  }
  const allPostBtn = document.querySelectorAll(".showPostBtn")
  allPostBtn.forEach(el => el.addEventListener("click", renderShowPostModal))
  const createPostBtn = document.querySelector('.create-post-btn');
  createPostBtn.addEventListener('click', renderCreatePostModal);
  const list = document.querySelector('#postsContainer');
  list.addEventListener('click', onDelPost);
  list.addEventListener('click', onEditPost);
}

async function onSearch() {
  const query = simpleSearch.value
  const posts = await getPosts()
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase().trim()))
  searchQuery = query
  renderPosts(filteredPosts)
}