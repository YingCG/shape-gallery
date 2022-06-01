window.addEventListener('load', () => {
    // console.log('Hello')
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    //Drawing Example

    /* ctx.strokeStyle='red';
    ctx.strokeRect(200, 100, 300, 500);
    ctx.fillRect(100, 50, 200, 200)
    ctx.beginPath();
    ctx.moveTo(500, 100);
    ctx.lineTo(200, 150);
    ctx.closePath()
    ctx.stroke()
    */

    //Variables
    let painting = false;
    let r = 0;
    let g = 0;
    let b = 0;

    function startPosition(e){
        painting = true;
        draw(e)
    }
    function finishPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;

        const colour = Math.floor(Math.random() * 256 * 256 * 256).toString(16)

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = '#' + colour;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    }

    // function rubber(e) {
    //     if(painting) return
    // }

    //Event Listeners
    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishPosition)
    canvas.addEventListener('mousemove', draw)
})
