var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
  preload: preload, create: create, update: update
});

var ball

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'assets/ball.png');


}
function create() {
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    ball = game.add.sprite(50, 20, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.velocity.set(30, 50);
    ball.body.bounce.set(1);
    ball.body.gravity.y=100

}
function update() {
     //ball.x += 1;
    //ball.y += 1;
    }
