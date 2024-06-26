import { renderPosts } from "./renderPosts";
import { editPost } from "./postApi";
import { getPostById } from "./postApi";
import { renderEditPostModal } from "./renderCreatePostModal";

const userName = "Timur"
export async function onEditPost(e) {
    if (e.target.classList.contains("editPostButton")) {
        const postId = e.target.dataset.id
        const editedPost = await getPostById(postId)
        renderEditPostModal()
        const closeModalBtn = document.querySelector("#closeModalBtn")
        closeModalBtn.addEventListener("click", onCloseBtn)
        function onCloseBtn() {
            const backdrop = document.querySelector('.backdrop');
            backdrop.remove();
        }
        const titleInput = document.querySelector("#titleInput")
        const categoryInput = document.querySelector("#categoryInput")
        const contentInput = document.querySelector("#contentInput")
        const editedTitle = editedPost.title
        const editedCategory = editedPost.category
        const editedText = editedPost.text
        titleInput.value = editedTitle
        categoryInput.value = editedCategory
        contentInput.value = editedText
        const editPostForm = document.querySelector("#editPostForm")
        editPostForm.addEventListener("submit", onEditSubmit)
        async function onEditSubmit(e) {
            e.preventDefault();
            const newPost = {};
            const data = e.currentTarget.elements;
            if (editedTitle !== data.title.value) {
                newPost.title = data.title.value
            }
            if (editedCategory !== data.category.value) {
                newPost.category = data.category.value
            }
            if (editedText !== data.text.value) {
                newPost.text = data.text.value
            }
            console.log(newPost)
            await editPost(postId, newPost)
            onCloseBtn()
            renderPosts()
        }
    }
}