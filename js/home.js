
function showTech(){
    let text = document.getElementById('showData')
    text.innerHTML = 'Technology is most often used to improve efficiency, it has made art more accessible. Artist can teach us about how to make technology more human.'
}
function showArt(){
    let text = document.getElementById('showData')
    text.innerHTML = 'Artists explore the emotional and social elements, with innovative thinking, artist can now make art in digital or on paper.'
}
function showHuman(){
    let text = document.getElementById('showData')
    text.innerHTML = 'The ability to imagine and to take that imagination and make it into reality is one of the things that is really distinctive about humans.'
}

// document.getElementById("tech").addEventListener("click", showText(e));
// document.getElementById("art").addEventListener("click", showText(e));
// document.getElementById("human").addEventListener("click", showText(e));

// function showText(){
//     let text = document.getElementById("showData")
//     let target = e.target
//     if(target.id === 'tech'){
//         text.innerHTML = 'Technology is most often used to improve efficiency, it has made art more accessible. Artist can teach us about how to make technology more human.'
//     } else if (target.id === 'art'){
//         text.innerHTML = 'Artists explore the emotional and social elements, with innovative thinking, artist can now make art in digital or on paper.'
//     } else if (target.id === 'human'){
//         text.innerHTML = 'The ability to imagine and to take that imagination and make it into reality is one of the things that is really distinctive about humans.'
//     }
// }


function fetchShowData(){
    fetch('../data/content.json')
    .then((res) => res.json())
    .then((jsonData) => {
        const showDataDiv = document.getElementById('showData')
        showDataDiv.innerHTML = '';
        jsonData.forEach((info) => {
            showDataDiv.innerHTML += `<h3>${info.content}</h3>`
        })
    })
}

