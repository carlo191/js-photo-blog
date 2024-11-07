/*<div class="col-md-3 mb-4">
<div class="card" style="width: 90%">
  <img src="./img/img600.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
  </div>
</div> */

// DATI
const postRowOne = document.getElementById("row");
const postRowTwo = document.getElementById("row-2");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
  .then((resp) => resp.json())
  .then((posts) => {
    console.log(posts);

    posts.forEach((post) => {
      postRowOne.innerHTML += `<div class="col-md-3 mb-4">
        <div class="card" style="width: 90%">
        <img src = ${post.url} class="card-img-top" alt="..." />
        <div class="card-body">
        <p class="card-text">
        ${post.title}
        </p>
        </div>
        </div> `;
    });
  });
fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
  .then((resp) => resp.json())
  .then((posts) => {
    console.log(posts);

    posts.forEach((post) => {
      postRowTwo.innerHTML += `<div class="col-md-3 mb-4">
        <div class="card" style="width: 90%">
        <img src=  ${post.url} class="card-img-top" alt="..." />
        <div class="card-body">
        <p class="card-text">
         ${post.title}
        </p>
        </div>
        </div> `;
    });
  });
