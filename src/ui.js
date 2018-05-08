class UI {
  constructor() {
    this.form = document.querySelector('#form')
    this.posts = document.querySelector('#posts'),
    this.titleInput = document.querySelector('#title'),
    this.bodyInput = document.querySelector('#body'),
    this.idInput = document.querySelector('#id'),
    this.postBtn = document.querySelector('#postBtn'),
    this.formState = 'add'
  }

  showPosts(posts) {
    
    let content = '';

    posts.forEach(post => {
      content += `
      <div class="card mb-2">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted" data-id="${post.id}">Message #${post.id}</h6>
            <p class="card-text">${post.body}</p>
            <button class="btn-light btn-sm editBtn">Edit</button>
            <button class="btn-danger btn-sm deleteBtn">Delete</button>
        </div>
    </div>
      `
    });

    this.posts.innerHTML = content;
  }

  clearFormFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillFormFields(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(state) {
    if (state === 'edit') {
      this.postBtn.textContent = 'Update';
      this.postBtn.classList = 'btn btn-warning'

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.classList = 'btn btn-light cancelBtn';

      this.form.insertAdjacentElement('beforeEnd', cancelBtn)
    } else {
      this.postBtn.textContent = 'Post it!';
      this.postBtn.classList = 'btn btn-primary';

      if (this.form.querySelector('.cancelBtn')) {
        this.form.querySelector('.cancelBtn').remove();
      }

      this.clearIdInput();

      this.clearFormFields();
    }
  }
}

export const ui = new UI();