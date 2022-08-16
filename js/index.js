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
    author: "Author 1",
    description: "Description 1"
  },
  {
    title: "Title 2",
    author: "Author 2",
    description: "Description 2"
  }
]

const btn = document.querySelector(".btn")
const blogs = document.querySelector(".blogs-container")

let content = blogs.innerHTML;
console.log(blogs.innerHTML)
blogsList.forEach(list => content += `
  <h1>${list.title}</h1>
  <h2>${list.author}</h2>
  <h3>${list.description}</h3>
`)
blogs.innerHTML = `${content}`;

