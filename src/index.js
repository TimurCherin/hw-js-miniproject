import {renderPosts} from "./js/renderPosts"
import {getPosts} from "./js/postApi"

// Запуск додатку
async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
    }
    startApp();