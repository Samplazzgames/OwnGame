var paddle, balls;
var ball, score;
var invisGround;
var gameState = "serve";
var bomb, bombs;
var bombIMG , basketIMG , ballIMG;
var bombSOUND , ballSOUND;


function preload(){
  bombIMG = loadImage('./Bomb_image.png');
  basketIMG = loadImage('./Basket_image.png');
  ballIMG = loadImage('./ball_image.png')
  bombSOUND = loadSound('./EXPLOSION.ogg');
  ballSOUND = loadSound('./Collecting.ogg');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  paddle = createSprite(width / 2, height - 100, 200, 20);
  paddle.addImage(basketIMG);
  paddle.scale = 0.75
  invisGround = createSprite(windowWidth / 2, windowHeight - 10, windowWidth, 10);
  invisGround.visible = false
  score = 0
  balls = new Group()
  bombs = new Group()
  
  

}

function draw() {
  background('black')
  paddle.x = mouseX

  if (gameState == "serve") {
    textSize(100)
    fill(255)
    text("Press space to start", windowWidth / 4, windowHeight / 2);

    paddle.visible = false;
    balls.visible = false;

  }

  if (keyDown("space") && gameState === 'serve') {
    gameState = 'play';
    paddle.visible = true;
    balls.visible = true;


  }

  if (balls.collide(invisGround) && gameState === 'play' || bombs.collide(paddle)) {
    gameState = 'end';
    textSize(100)
    fill(255)
    text("Your Score:" + score, windowWidth / 4, windowHeight / 2);
    bombSOUND.play()
    createBall.destroyEach();
    createBomb.destroyEach();
  }


  textSize(25)
  fill(255)
  text("Score:" + score, width - 200, 100);

  if (balls.bounceOff(paddle)) {
    score = score + 5
    ballSOUND.play()
  }
  createBall()
  createBomb()

  balls.bounceOff(paddle)
  

  drawSprites()
}

function createBall() {
  if (frameCount % 100 === 0) {
    ball = createSprite(random(50, width - 50), 0, 20, 20);
    ball.addImage(ballIMG);
    ball.scale = 0.20
    ball.velocityY = 5 + score / 10;
    ball.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
    balls.add(ball);
  }
}

function createBomb() {
  if (frameCount % 150 === 0) {
    bomb = createSprite(random(50, width - 50), 0, 40, 40);
    bomb.addImage(bombIMG);
    bomb.scale = 0.75
    bomb.velocityY = 5 + score / 10;
    bomb.shapeColor = "red";
    bombs.add(bomb);
  }
}

function gameOver() {
  textSize(100)
  fill(255)
  text("Your Score:" + score, windowWidth / 2, windowHeight / 2)
}
