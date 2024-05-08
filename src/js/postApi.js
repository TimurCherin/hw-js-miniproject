const urlPost = 'http://localhost:3000/posts'
const urlUser = 'http://localhost:3000/users'
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

export async function editPost(postId, editedPost) {
  try {
    await fetch(`${urlPost}/${postId}`, {
      method: "PATCH",
      body: JSON.stringify(editedPost)
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

export async function getUsers() {
  try {
    const response = await fetch(urlUser)
    const users = await response.json()
    return users
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(newUser) {
  try {
    await fetch(urlUser, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
  } catch (error) {
    console.error(error);
  }
}