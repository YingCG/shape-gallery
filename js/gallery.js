// const div = document.createElement('div')
// div.className = 'page'

// console.log(div.outerHTML)

// div.classList.remove("page");
// div.classList.add("shape");
// console.log(div.outerHTML)

// // div.classList.toggle("visible");
// // div.classList.toggle("visible", i < 10);
// // console.log(div.classList.contains("page"));

// div.classList.add("fullpage");
// console.log(div.outerHTML)

// div.classList.replace("fullpage", "shapepage");
// console.log(div.outerHTML)

const shapes = document.querySelectorAll(".shape-gallery")


function expandToPage(e){
    this.classList.toggle("shape-pages")
    console.log(this, "trying to change to class - shape-pages ")
    e.style.display = "block"
}

shapes.forEach((shape) => {
    shape.addEventListener('click', expandToPage);
  });


