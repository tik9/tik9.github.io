window.onload=function() {
        //console.log('bro js fl')

var over = document.getElementById('over');
var win = document.getElementById('win');


window.onclick = function(event) {
    if (event.target == over) {
        over.style.display = "none";
    }
}

var canvas = document.getElementById('myCanvas');
canvas.width=960
canvas.width=480

canvas.height=640
canvas.height=320

var ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleWidth = 140;

var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
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

function keyDownHandler(e) {
    if(e.key == "ArrowRight") {rightPressed = true;    }
    else if(e.key == "ArrowLeft") {leftPressed = true;}
    else if (e.key=='Enter'){ startgame()}
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
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
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }            
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
           if(y= y-paddleHeight){
            dy = -dy  ;
			 }
        }
        else {
            console.log('game o., x, right paddle',x,paddleX+paddleWidth)
            over.style.display = "block";
            clearInterval(interval);
            
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}
s=10
//draw()
var interval
//document.getElementById('start_game').onclick=start_game(this)


function startgame(e){
    //console.log('start game',e.target.id)
 interval = setInterval(draw, s);
}

document.getElementById("start_game").addEventListener ("click", startgame);
document.getElementsByClassName('close')[0].addEventListener ("click", function(){location.reload()});
document.getElementsByClassName('close')[1].addEventListener ("click", function(){location.reload()});


//modal.style.display = "block";
draw()
}

