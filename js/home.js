
// function showTech(){
//     let text = document.getElementById('showData')
//     text.innerHTML = '<h3> Technology is most often used to improve efficiency, it has made art more accessible. Artist can teach us about how to make technology more human. </h3>'
// }
// function showArt(){
//     let text = document.getElementById('showData')
//     text.innerHTML = '<h3> Artists explore the emotional and social elements, with innovative thinking, artist can now make art in digital or on paper. </h3>'
// }
// function showHuman(){
//     let text = document.getElementById('showData')
//     text.innerHTML = '<h3> The ability to imagine and to take that imagination and make it into reality is one of the things that is really distinctive about humans. </h3>'
// }

// document.getElementById("tech").addEventListener("click", showText);
// document.getElementById("art").addEventListener("click", showText);
// document.getElementById("human").addEventListener("click", showText);

function showText(event){
    let text = document.getElementById("showData")
    let target = event.target
    if(target.id === 'tech'){
        text.innerHTML = 'Technology is most often used to improve efficiency; it has made art more accessible. Artist can teach us about how to make technology more human. It is an art of solving problems!'
    } else if (target.id === 'art'){
        text.innerHTML = 'Artists explore the emotional and social elements, with innovative thinking, artist can now make art in digital or on paper.'
    } else if (target.id === 'human'){
        text.innerHTML = 'The ability to imagine and to take that imagination and make it into reality is one of the things that is really distinctive about humans.'
    }
}

// function fetchShowData(){
//     fetch('../data/content.json')
//     .then((res) => res.json())
//     .then((jsonData) => {
//         const showDataDiv = document.getElementById('showData')
//         showDataDiv.innerHTML = '';
//         jsonData.forEach((info) => {
//             showDataDiv.innerHTML += `<h3>${info.title}</h3>${info.url}`
//         })
//     })
// }

let contentData;
let contentIndex = -1;

function fetchInfo(){
    fetch('../data/content.json')
    .then((res) => res.json())
    .then((jsonData) => {
        contentData = jsonData;
    })
}

fetchInfo();

function changeInfo(){
    if(contentIndex === contentData.length) { 
        contentIndex = 0;
    }
    contentIndex++;

    const showDataDiv = document.getElementById('showData')
    const showImageDiv = document.getElementById('showImage')

    showDataDiv.innerHTML = `<h3>${contentData[contentIndex].title}</h3> ${contentData[contentIndex].url}`
    showImageDiv.innerHTML = `<img src="${contentData[contentIndex].img}">`;
    // return img
}
