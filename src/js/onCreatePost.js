import { createPost } from "./postApi";
import { renderPosts } from "./renderPosts";
import { getCurrentUser } from "./getCurrentUser";

export async function onCreatePost(e) {
  e.preventDefault();
  const userName = getCurrentUser()
  const data = e.currentTarget.elements;
  const newPost = {
    title: data.title.value,
    category: data.category.value,
    text: data.text.value,
    author: userName,
    date: new Date().toLocaleString(),
    comments: []
  };
  await createPost(newPost);
  await renderPosts();
  const backdrop = document.querySelector('.backdrop');
  backdrop.remove();
}