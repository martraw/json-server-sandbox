import { http } from "./http";

http.get('http://localhost:3000/posts')
  .then(data => console.log(data));