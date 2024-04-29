import postsTemplate from '../templates/post-template.hbs';
const postsContainer = document.querySelector("#postsContainer")

export function renderPosts(posts) {
    postsContainer.innerHTML = postsTemplate({posts});   
}