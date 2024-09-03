const pages = ['Explore','Play', 'Create', 'Canvas','Connect']
// menu2 = ['Explore', 'Experiment', 'Canvas', 'Essence']

const menuDiv = document.querySelector('.menu')

pages.forEach((page) => {
    let removeSpace = page.replaceAll(' ','')

    // console.log(page)
    if (page === 'index.html'){
        menuDiv.innerHTML += `<a href="./pages/${page}.html">index</a>`
    }

    if (page === 'Canvas'){
        menuDiv.innerHTML += `<a href="../pages/${page}.html">Draw Here!!!</a>`
    }
    else{
        menuDiv.innerHTML += `<a href="../pages/${page}.html">${removeSpace}</a>`
    }
    console.log(menuDiv)
})

