const url = 'http://localhost:3000/posts'

// Отримання списку постів
export async function getPosts() {
    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts)
        return posts
    } catch (error) {
    console.error(error);
    }
    }
    // Створення нового поста
    
    // async function createPost(title, content) {
    
    // try {
    
    // } catch (error) {
    
    // console.error(error);
    
    // }
    
    // }
    
    // // Оновлення поста
    
    // async function updatePost(id, title, content) {
    
    // try {
    
    // } catch (error) {
    
    // console.error(error);
    
    // }
    
    // }
    
    // // Видалення поста
    
    // async function deletePost(id) {
    
    // try {
    
    // } catch (error) {
    
    // console.error(error);
    
    // }
    
    // }
    
    // // Додавання коментаря до поста
    
    // async function createComment(postId, comment) {
    
    // try {
    
    // } catch (error) {
    
    // console.error(error);
    
    // }
    
    // }
    
    // // Оновлення відображення постів на сторінці

    // function renderPosts(posts) {
    
    // }
    // // Обробник події для створення поста
    // document.getElementById('createPostForm').addEventListener('submit', cb);
    // // Обробник події для редагування поста
    // document.addEventListener('click', cb);
    // // Обробник події для видалення поста
    // document.addEventListener('click', cb);
    // // Обробник події для додавання коментаря
    // document.addEventListener('submit', cb);