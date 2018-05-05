class UI {
  constructor() {
    this.posts = document.querySelector('#posts'),
    this.titleInput = document.querySelector('#title'),
    this.bodyInput = document.querySelector('#body'),
    this.idInput = document.querySelector('#id'),
    this.postBtn = document.querySelector('#postBtn'),
    this.formState = 'add'
  }
}

export const ui = new UI();