const pages = ['Explore','Play', 'Create', 'Canvas','Connect']
// menu2 = ['Explore', 'Experiment', 'Canvas', 'Essence']

const menuDiv = document.querySelector('.menu')

pages.forEach((page) => {
    let removeSpace = page.replaceAll(' ','').toLowerCase()

    // console.log(page)
    if (page === 'index.html'){
        menuDiv.innerHTML += `<a href="https://yingcg.github.io/shape-gallery/pages/${removeSpace}.html">index</a>`
    }

    if (page === 'Canvas'){
        menuDiv.innerHTML += `<a href="https://yingcg.github.io/shape-gallery/pages/${removeSpace}.html">Draw Here!!!</a>`
    }
    else{
        menuDiv.innerHTML += `<a href="https://yingcg.github.io/shape-gallery/pages/${removeSpace}.html">${page}</a>`
    }
    console.log(menuDiv)
})

