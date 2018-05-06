class UI {
  constructor() {
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
            <h6 class="card-subtitle mb-2 text-muted">Message #${post.id}</h6>
            <p class="card-text">${post.body}</p>
            <button class="btn-light btn-sm">Edit</button>
            <button class="btn-danger btn-sm">Delete</button>
        </div>
    </div>
      `
    });

    this.posts.innerHTML = content;
  }
}

export const ui = new UI();