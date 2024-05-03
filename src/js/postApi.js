const urlPost = 'http://localhost:3000/posts'
const wrap = document.querySelector(".postsContainer") 
// Отримання списку постів
export async function getPosts() {
    try {
        const response = await fetch(urlPost)
        const posts = await response.json()
        return posts
    } catch (error) {
    console.error(error);
    }
    }
    // Створення нового поста
    // function MarkUp(){
    //     const markUp = response.map((obj) => {
    //         return `<div class="post">
    //         <h2>${obj.title}</h2>
    //         <p>${obj.text}</p>
    //         <button class="editPostButton" data-id="${obj.text}">Редагувати</button>
    //         <button class="deletePostButton" data-id="${obj.text}">Видалити</button>
    //         <div class="commentsContainer" data-id="${obj.post_id}">
    //         <h3>Коментарі:${obj.comments.comment}</h3>
    //         <ul>
    //         <li>${obj.comments.comment}</li>
    //         </ul>
    //         <form class="createCommentForm">
    //         <input type="text" class="commentInput" placeholder="Новий коментар" required>
    //         <button type="submit">Додати коментар</button>
    //         </form>
    //         </div>
    //         </div>`
    //     })
    //     wrap.insertAdjacentHTML("beforeend", markUp.join(""))
    // }

    // submitBtn.addEventListener("submit", onSubmit)
    // function onSubmit(){
        
    // }
    export async function createPost(newPost) {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
    } catch (error) {
    console.error(error);
    }
    }

    // Оновлення поста
    // async function updatePost(newPost) {
    // try {
    //     fetch(urlPost, {
    //         method: "POST",
    //         body: JSON.stringify(newMovie),
    //         headers: {
    //           "Content-Type": "application/json; charset=UTF-8",
    //         },
    //       })
    // } catch (error) {
    // console.error(error);
    // }
    // }    

// Видалення поста
    export async function deletePost(id) {
    try {
    await fetch(`${urlPost}/${id}`, {
        method: "DELETE"
    })
    } catch (error) {
    console.error(error);
    }
    }

    // Додавання коментаря до поста
    export async function createComment(postId, newComment) {
    try {
        await fetch(`${urlPost}/${postId}`, {
            method: "PATCH",
            body: JSON.stringify(newComment),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
    } catch (error) {
    console.error(error);
    }
    }
    
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