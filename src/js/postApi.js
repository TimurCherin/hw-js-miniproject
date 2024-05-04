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

    export async function getPostById(post_id) {
      try {
        const response = await fetch(`${urlPost}/${post_id}`);
        const post = await response.json();
        console.log('post', post);
        return post;
      } catch (error) {
        console.error(error);
      }
    }

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