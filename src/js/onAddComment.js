import { getPostById, createComment } from './postApi.js';
import { renderPosts } from './renderPosts.js';
const userName = 'Timur';

export async function onAddComment(e) {
  e.preventDefault();
  const postId = e.currentTarget.dataset.id;
  const comment = {
    comment: e.currentTarget.elements.comment.value,
    userName: userName,
    date: new Date().toLocaleString(),
    like: false,
  };
  const currentPost = await getPostById(postId);
  const { comments } = currentPost;
  comments.push(comment);
  const NewComments = { comments: comments };
  await createComment(postId, NewComments);
  await renderPosts();
}