var paddle, balls;
var ball, score;
var invisGround;
var gameState = "serve";

function setup() {
  createCanvas(windowWidth, windowHeight)
  paddle = createSprite(width / 2, height - 100, 200, 20);
  invisGround = createSprite(windowWidth / 2, windowHeight - 10, windowWidth, 10);
  invisGround.visible = false
  score = 0
  balls = new Group()

}

function draw() {
  background('black')
  paddle.x = mouseX

  if (gameState == "serve") {
    textSize(100)
    fill(255)
    text("Press space to start" , windowWidth/4 , windowHeight / 2);

    paddle.visible=false;

    if(keyDown == 32){
      gameState = "play";
    }else{
      gameState = "serve";
    }
   
   }

  if(gameState == "play"){
    paddle.visible = true
  textSize(25)
  fill(255)
  text("Score:" + score, width - 200, 100);

  createBall()

  if (balls.bounceOff(paddle)) {
    score = score + 5
  }

}

   drawSprites()
 }

function createBall() {
  if (frameCount % 100 === 0) {
    ball = createSprite(random(50, width - 50), 0, 20, 20);
    ball.velocityY = 5 + score / 10;
    ball.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
    balls.add(ball);
  }
}

// function gameOver() {
//   textSize(100)
//   fill(255)
//   text("Your Score:" + score, windowWidth / 2, windowHeight / 2)
// }
