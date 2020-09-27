import React, {useEffect} from 'react';

function Draw() {
    var canvas = document.getElementById('MyGraph')
    var ctx = canvas.getContext('2d');

    var w = canvas.width
    var h = canvas.height

    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(10,h);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(10,h);
    ctx.lineTo(w,h);
    ctx.stroke();

    canvas.onmousedown = (e) => {
        ctx.fillstyle = 'rgb(100,100,0)'
        ctx.fillRect(e.clientX, e.clientY,100,100);
    }
}

const MyGraph = (props) => {
    useEffect(() => {
        Draw(); 
    })

    return (
        <div>
            <canvas id='MyGraph' width='700' height='300'>
            </canvas>
        </div>
    )    
}

export default MyGraph;

