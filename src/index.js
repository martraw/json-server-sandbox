import { http } from './http';
import { ui } from './ui';


document.addEventListener('DOMContentLoaded', getPosts);

function getPosts(url) {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

