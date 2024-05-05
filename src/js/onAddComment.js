import { getPostById, createComment } from './postApi.js';
import { renderPosts } from './renderPosts.js';
const userName = 'Timur';

export async function onAddComment(e) {
  e.preventDefault();
  const commentForm = document.querySelector('.createCommentForm');
  const commentsWrap = document.querySelector(".commentsWrap")
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
  await createComment(postId, NewComments)
  commentForm.reset()
  const markUp = `
  <article class="text-base bg-white rounded-lg mb-2">
  <footer class="flex justify-between items-center mb-2">
      <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
              ${comment.userName}
          </p>
          <p class="text-sm text-gray-600"><time pubdate="" datetime="${comment.date}"
                  title="${comment.date}">${comment.date}</time></p>
      </div>
  </footer>
  <p class="text-gray-500">${comment.comment}</p>
</article>
  `
  commentsWrap.insertAdjacentHTML("beforeend", markUp)
}
// export async function onAddComment(e) {
//   console.log(123)
//   e.preventDefault();
//   const postId = e.currentTarget.dataset.id;
//   const comment = {
//     comment: e.currentTarget.elements.comment.value,
//     userName: userName,
//     date: new Date().toLocaleString(),
//     like: false,
//   };
//   const currentPost = await getPostById(postId);
//   const { comments } = currentPost;
//   comments.push(comment);
//   const NewComments = { comments: comments };
//   await createComment(postId, NewComments);
//   await renderPosts();
// }