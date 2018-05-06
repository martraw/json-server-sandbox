import { http } from './http';
import { ui } from './ui';


document.addEventListener('DOMContentLoaded', getPosts);

ui.postBtn.addEventListener('click', submitPost);

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
    })
    .catch(err => console.log(err));
}

