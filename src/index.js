import { http } from './http';
import { ui } from './ui';


document.addEventListener('DOMContentLoaded', getPosts);

ui.postBtn.addEventListener('click', submitPost);

ui.posts.addEventListener('click', deletePost);

function getPosts(url) {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

function submitPost() {
  const newPost = {
    title: ui.titleInput.value,
    body: ui.bodyInput.value
  }

  http.post('http://localhost:3000/posts', newPost)
    .then(data => {
      getPosts();
      ui.clearFormFields();
    })
    .catch(err => console.log(err));
}

function deletePost(e) {
  if (e.target.classList.contains('deleteBtn')) {
    const id = e.target.parentElement.querySelector('[data-id]').dataset.id;

    if (confirm(`Delete post #${id}?`)) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          getPosts();
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  }
}

