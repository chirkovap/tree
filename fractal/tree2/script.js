const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let curve;

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    //ctx.lineTo(0, -len);
    if (angle>0){
        ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len);
    }else{
        ctx.bezierCurveTo(10, -len/2, -10, -len/2, 0, -len);
    }
    ctx.stroke();
    if (len < 15) {
        ctx.beginPath();
        ctx.arc(0, -len, 15, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }
    curve = (Math.random() * 10) + 10;
    drawTree(0, -len, len*0.8, angle+10, branchWidth * 0.7);
    drawTree(0, -len, len*0.8, angle-10, branchWidth * 0.7);
    ctx.restore();
}

drawTree(0, canvas.height, 140, +15, 20, 'brown', 'green')
ctx.save();
drawTree(canvas.width, canvas.height, 140, -15, 20, 'brown', 'green')