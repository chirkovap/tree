const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let curve;

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();//начинаем рисовать
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);//поворот ветви
    ctx.moveTo(0, 0);
    //ctx.lineTo(0, -len);
    if (angle>0){
        ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len);
    }else{
        ctx.bezierCurveTo(10, -len/2, -10, -len/2, 0, -len);
    }//рисуем ветви древа
    ctx.stroke();
    if (len < 8) {
        ctx.beginPath();
        ctx.arc(0, -len, 15, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
        //рисуем листья
    }
    curve = (Math.random() * 10) + 10;
    drawTree(0, -len, len*0.8, angle+curve, branchWidth * 0.7);
    drawTree(0, -len, len*0.8, angle-curve, branchWidth * 0.7);
    ctx.restore();
}
drawTree(canvas.width/2, canvas.height - 80,100,0, 15, '#573715', 'green');

function generateRandomTree(){//создаем функицию рандомного созданяи древа 
ctx. clearRect(0,0,canvas. width, canvas. height); 
let centerPointX = canvas.width/2; 
let len = Math. floor((Math.random() * 20) + 100); 
let angle = 0; 
let branchWidth = (Math.random() * 70) + 1; 
let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
drawTree(centerPointX, canvas.height+5, len, angle, branchWidth, color1, color2);
}

generateRandomTree()

