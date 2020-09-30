import React, {useEffect} from 'react';

function CurveLine(ctx, sx, sy, ex, ey, color="#000", lineWidth=1) {
    var oriColor = ctx.strokeStyle
    var oriLineWidth = ctx.lineWidth

    ctx.beginPath();
    ctx.moveTo(sx,sy);
    ctx.quadraticCurveTo((sx + ex) / 2, (sy + ey) / 2, ex, ey)
    ctx.strokeStyle = color;
    ctx.lineWidth= lineWidth;
    ctx.stroke();

    ctx.strokeStyle = oriColor
    ctx.lineWidth = oriLineWidth
}
function Line(ctx, sx, sy, ex, ey, color="#000", lineWidth=1) {
    var oriColor = ctx.strokeStyle
    var oriLineWidth = ctx.lineWidth

    ctx.beginPath();
    ctx.moveTo(sx,sy);
    ctx.lineTo(ex,ey);
    ctx.strokeStyle = color;
    ctx.lineWidth= lineWidth;
    ctx.stroke();

    ctx.strokeStyle = oriColor
    ctx.lineWidth = oriLineWidth
}

function Draw(id) {
    var maxX , maxY, minX, minY
    var arrX = []
    var arrY = []
    for (var i = 0;i < 20;i++) {
        var y = Math.floor(Math.random() * 10)
        arrY.push(y)
        arrX.push(i)
    }
    maxX = Math.round(Math.max(...arrX) / 10) * 10
    maxY = Math.round(Math.max(...arrY) / 10) * 10

    minX = Math.min(...arrX)
    minY = Math.min(...arrY)

    var canvas = document.getElementById(id)
    var ctx = canvas.getContext('2d');
       
    var padding = 30;

    var top = padding;
    var left = padding;

    var right = canvas.width - padding
    var bottom = canvas.height - padding

    var w = right - left;
    var h = bottom - top;

    var sx = left;
    var sy = bottom

    Line(ctx, left, top, left, bottom + 7, "#999", 2)
    Line(ctx, left - 7, bottom  , right , bottom, "#999", 2) 
    
    for (var i = 0 ; i <= 5 ; i++) {
        var tempX = sx + (w / 5) * i ;
        var tempY = sy - (h / 5) * i ;

        Line(ctx, tempX , sy , tempX , top, "#999", 1)
        Line(ctx, sx , tempY , right , tempY, "#999", 1)

        ctx.fillText(Math.floor(maxX / 5 * i), tempX, bottom + 20)
        ctx.fillText(Math.floor(maxY / 5 * i), left - 20, tempY)
    }
    
    var multiX = w / maxX
    var multiY = h / maxY
    var postX = 0
    var postY = 0
    for (var i = 0 ; i < arrY.length ; i++) {
        var x = sx + arrX[i] * multiX
        var y = sy - arrY[i] * multiY
        ctx.beginPath()
        ctx.arc(x,y,1, 0,Math.PI * 2)
        ctx.stroke()

        if ( i > 0 ) {
            CurveLine(ctx,postX,postY, x, y, "#555", 1)
        }

        postX = x;
        postY = y;
    }

    canvas.onmousedown = (e) => {
        //        ctx.fillstyle = 'rgb(100,100,0)'
        //        ctx.fillRect(e.clientX, e.clientY,100,100);
    }
}

const MyGraph = (props) => {

    useEffect(() => {
        Draw(props.id); 
    })

    return (
        <div>
            <canvas id={props.id} width={props.width} height={props.height} style={{ border : "1px solid #000"}}>
            </canvas>
        </div>
    )    
}

export default MyGraph;

