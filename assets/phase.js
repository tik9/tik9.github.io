var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
  preload: preload, create: create, update: update
});

var ball
var paddle

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'assets/ball.png');
    game.load.image('paddle', 'assets/paddle.png');



}
function create() {
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.collideWorldBounds = true;
    ball.body.velocity.set(150, -150);
    ball.body.bounce.set(1);
    ball.body.gravity.y=100
    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;

}
function update() {
     //ball.x += 1;
    //ball.y += 1;
    game.physics.arcade.collide(paddle,ball)
    paddle.x = game.input.x|| game.world.width*0.5;
}
