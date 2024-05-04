import postsTemplate from '../templates/post-template.hbs';
import { getPosts } from './postApi.js';
import { onAddComment } from './onAddComment.js';
import { onDelPost } from './onDel.js';
import { renderCreatePostModal } from './renderCreatePostModal.js';
const postsContainer = document.querySelector('#postsContainer');

const userName = 'Timur';

export async function renderPosts() {
  const posts = await getPosts();
  postsContainer.innerHTML = postsTemplate({ posts });

  const createPostBtn = document.querySelector('.create-post-btn');
  createPostBtn.addEventListener('click', renderCreatePostModal);
  const list = document.querySelector('#postsContainer');
  list.addEventListener('click', onDelPost);
  const CommentFormList = document.querySelectorAll('.createCommentForm');
  CommentFormList.forEach(el => el.addEventListener('submit', onAddComment));
}