window.onload=function(){
    
var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 10, 120);
}


myGameArea = {
  canvas : document.getElementById("myCanvas"),
  start : function() {
    this.canvas.width = 640;
    this.canvas.height = 320;
    this.context = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 100);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
   this.speedX = 0;
  this.speedY = 0;
  
   this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.x+=1
  console.log('count')
  myGamePiece.newPos()
  myGamePiece.update();
}

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e){
    if (e.key=='ArrowRight'){
        myGamePiece.speedX+=1
    }
    if (e.key=='ArrowLeft'){
        myGamePiece.speedX-=1
    }
    
}
document.getElementById('moveup').addEventListener('click',function() {
  myGamePiece.speedY -= 1;
})

document.getElementById('movedown').addEventListener('click',function() {
  myGamePiece.speedY += 1;
})

document.getElementById('moveleft').addEventListener('click',function() {
  myGamePiece.speedX -= 1;
})

document.getElementById('moveright').addEventListener('click',function() {
  myGamePiece.speedX += 1;
})

startGame()
}
