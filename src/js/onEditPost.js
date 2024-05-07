import { renderPosts } from "./renderPosts";
import { editPost } from "./postApi";

const userName = "Timur"
export async function onEditPost(e) {
    e.preventDefault();
    const postId = e.target.dataset.id
    const data = e.currentTarget.elements;
    const editedPost = {
        title: data.title.value,
        category: data.category.value,
        text: data.text.value,
    };
    const backdrop = document.querySelector('.backdrop');
    await editPost(postId, editedPost)
    renderPosts()
    backdrop.remove();
}