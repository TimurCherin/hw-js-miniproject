import postsTemplate from '../templates/post-template.hbs';
import {getPosts} from './postApi.js'
const postsContainer = document.querySelector("#postsContainer")

export async function renderPosts() {
    const posts = await getPosts() 
    postsContainer.innerHTML = postsTemplate({posts});   
}
