const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreElement = document.querySelector('.score span')

let score = 0
console.log(holes)

const sound = new Audio("/images/smash.mp3")
function randomAppear() {
    const i = Math.floor(Math.random() * holes.length)
    // console.log(i)

    const hole = holes[i]
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = '/images/mole.png'

    img.addEventListener('click', () => {
        score ++
        sound.play()
        scoreElement.textContent = score
        img.src = '/images/mole-whacked.png'
        clearTimeout(()=> {
            hole.removeChild(img)
            randomAppear()
        },500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        randomAppear()
    }, 1500)
}
randomAppear()

window.addEventListener('mouseover', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', e => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})