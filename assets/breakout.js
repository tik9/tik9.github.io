window.onload=function() {
//console.log('bro js fil')

over = document.getElementById('over');
win = document.getElementById('win');
live=document.getElementById('live')

canvas = document.getElementById('myCanvas');
canvas.width=480
canvas.height=320

lives = 2

ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 140;

paddleX = (canvas.width-paddleWidth)/2;
 rightPressed = false;
 leftPressed = false;
var brickRowCount = 2
var brickColumnCount = 3
score=5
score=0

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0,status: 1 };
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    relativeX = e.clientX - canvas.offsetLeft
    relativeY = e.clientY - canvas.offsetTop

    if(relativeX -paddleWidth/2 > 0 && relativeX < canvas.width -paddleWidth/2 && relativeY >0 && relativeY < canvas.height) {
        //console.log(relativeY, canvas.height)
        paddleX = relativeX - paddleWidth/2;
        ctx.clearRect(0, canvas.height-paddleHeight, canvas.width, paddleHeight);
        drawPaddle()
    }
}
function keyDownHandler(e) {
    if(e.key == "ArrowRight" && paddleX < canvas.width-paddleWidth) {
        rightPressed = true;
        //ctx.clearRect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        //paddleX+=7;
        //drawPaddle()    
        }
    else if(e.key == "ArrowLeft" && paddleX >0) {
        leftPressed = true;
        //ctx.clearRect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        //paddleX-=7;
        //drawPaddle()
        }
    else if (e.key=='Enter'){ startgame()}
    else if (e.key=='ArrowUp'){location.reload()}

}

function keyUpHandler(e) {
    if(e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if( e.key == "ArrowLeft") {
        leftPressed = false;
            
        }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    console.log('dp')
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = (canvas.width-3*brickWidth)/2;
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            b=bricks[c][r]
            if (b.status==1){
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                b.x = brickX;
                b.y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();

                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                   score++;
                  if(score == brickRowCount*brickColumnCount) {
                        win.style.display = "block";
                        console.log('won')
                        clearInterval(interval);
                  }
                }
            }            
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
function draw() {
    //console.log('dra')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore()
    drawLives()
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy  ;
    
        }
        else {
            lives--;
            if(!lives) {
                //console.log('game o., x, right paddle',x,paddleX+paddleWidth)
                over.style.display = 'block';
                clearInterval(interval); 
            }
            else {
                //clearInterval(interval); 
                x = canvas.width/2;
                y = canvas.height-30;
                paddleX = (canvas.width-paddleWidth)/2;
                //live.style.display='block'
            }
            
        }
    }
    
 paddlemove()   
    
    x += dx;
    y += dy;
}
function paddlemove(){
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        console.log('left')
        paddleX -= 7;
    }
}

//paddlemove()

s=10
var interval

function startgame(e){
    //console.log('start game',e.target.id)
 interval = setInterval(draw, s);
}

document.getElementById("start_game").addEventListener ("click", startgame);
document.getElementsByClassName('close')[0].addEventListener ("click", function(){
    location.reload()
    });
document.getElementsByClassName('close')[1].addEventListener ("click", function(){
    //console.log('close1');
    location.reload()
    });
document.getElementById('live').addEventListener ("click", function(){console.log('lost one');
    });
window.onclick = function(event) {
    if (event.target == over || event.target== win) {
        location.reload()
    }
     if (event.target == live) {
        console.log('live')
        draw()
    }
}

draw()
drawPaddle()
}

