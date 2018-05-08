import { http } from './http';
import { ui } from './ui';


document.addEventListener('DOMContentLoaded', getPosts);

ui.postBtn.addEventListener('click', submitPost);

ui.posts.addEventListener('click', deletePost);

ui.posts.addEventListener('click', enableEdit);

ui.form.addEventListener('click', cancelEdit)



function getPosts(url) {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

function submitPost() {
  const newPost = {
    title: ui.titleInput.value,
    body: ui.bodyInput.value,
  }

  if (newPost.title === '' || newPost.body === '') {
    return;
  } else {
    if (ui.idInput.value === '') {
      //Create post
      http.post('http://localhost:3000/posts', newPost)
        .then(data => {
          getPosts();
          ui.clearFormFields();
        })
        .catch(err => console.log(err));
    } else {
      // Update post
      console.log(ui.idInput.value);
      http.put(`http://localhost:3000/posts/${ui.idInput.value}`, newPost)
      .then(data => {
        ui.clearFormFields();
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err));
    }
  }
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
  e.preventDefault();
}

function enableEdit(e) {
  if (e.target.classList.contains('editBtn')) {
    const editedPostElem = e.target.parentElement.parentElement;
    const data = {
      id: editedPostElem.querySelector('[data-id]').dataset.id,
      title: editedPostElem.querySelector('.card-title').textContent,
      body: editedPostElem.querySelector('.card-text').textContent
    }

    ui.fillFormFields(data);
  }

  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains('cancelBtn')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}