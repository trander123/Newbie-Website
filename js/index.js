console.log("JS Working")

const navToggle = document.querySelector(".nav-toggle")
const navList = document.querySelector(".nav-menu-list")
const logo = document.querySelector(".logo")


let i = 0;
navToggle.addEventListener("click", () => {
  console.log("clicked")
  switch (i) {
    case 0: 
      navList.style.display = "block";
      i = 1;
      break;
    case 1:
      navList.style.display = "none";
      i = 0;
      break;
  }
})

const blogsList = [
  {
    title: "Title 1",
    author: "James Smith",
    description: "Description 1"
  },
  {
    title: "Title 2",
    author: "John Doe",
    description: "Description 2"
  }
]

const btn = document.querySelector(".btn")
const blogs = document.querySelector(".blogs-container")

let content = blogs.innerHTML;
console.log(content)
blogsList.forEach(list => content += `
  <div class="card">
    <div class="card-pic">
      <img src="img/card.jpg" alt="Card" class="card-img">
    </div>
    <h2 class="card-title">${list.title}</h2>
    <p class="card-author">${list.author}</p>
    <input class="btn" type="button" value="Show">
  </div>
`)

blogs.innerHTML = `${content}`;