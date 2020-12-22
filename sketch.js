const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg, terroristImg, soldierImg, chiefImg;
var soldier;
var wall1;
var bullet, bullet1;
var range1,range2,range3;
var gameState = 0;

function preload(){
	chiefImg = loadImage("chief.jpg");
	soldierImg = loadImage("man.png");
	terroristImg = loadImage("soldier.jpg");
    backgroundImg = loadImage("bg.jpg");
}
function setup() {
	createCanvas(800, 600);
    engine = Engine.create();
	world = engine.world;
    bulletGroup = new Group();
	
	soldier = createSprite(80,550,60,60);
	soldier.addImage(soldierImg);
	soldier.scale = 0.35;

	chief = createSprite(750,50,60,60);
	chief.addImage(chiefImg);
	chief.scale = 0.35;

	terrorist1 = createSprite(200,50,60,60);
	terrorist1.addImage(terroristImg);
	terrorist1.scale = 0.35;
	terrorist1.rotation = -135;

	terrorist2 = createSprite(550,50,60,60);
	terrorist2.addImage(terroristImg);
	terrorist2.scale = 0.35;
	terrorist2.rotation = -135;

	terrorist3 = createSprite(750,400,60,60);
	terrorist3.addImage(terroristImg);
	terrorist3.scale = 0.35;
	terrorist3.rotation = -45;

	range1 = createSprite(200,150,300,300);
	range1.visible = false;
    range2 = createSprite(500,150,300,300);
	range2.visible = false;
    range3 = createSprite(680,400,270,270);
	range3.visible = false;


	wall1 = createSprite(680,70,20,140);
	wall1.shapeColor = "red";
	wall2 = createSprite(740,250,120,20);
	wall2.shapeColor = "red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  if(gameState === 0){
	if(keyDown(RIGHT_ARROW)){
		soldier.x+=3;
	}
	if(keyDown(LEFT_ARROW)){
	  soldier.x-=3;
    }
    if(keyDown(UP_ARROW)){
	  soldier.y-=3;
    }
    if(keyDown(DOWN_ARROW)){
	  soldier.y+=3;
	}
	
    if(keyDown("s")){
	  soldier.rotation = 90;
    }
    if(keyDown("a")){
	  soldier.rotation = 180;
    }
    if(keyDown("w")){
	  soldier.rotation = 270;
    }
    if(keyDown("d")){
	  soldier.rotation = 360;
	}
	if(soldier.rotation === 90 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = 5;
	}
	if(soldier.rotation === 180 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = -5;
	}
	if(soldier.rotation === 270 && keyDown("space")){
		createBulletVertical();
		bullet1.velocityY = -5;
	}
	if(soldier.rotation === 360 && keyDown("space")){
		createBulletHorizontal();
		bullet.velocityX = 5;
	}
  }
  drawSprites();
}
function createBulletHorizontal(){
	bullet = createSprite(soldier.x,soldier.y,20,5); 
	bullet.shapeColor = "yellow";
}
function createBulletVertical(){
	bullet1 = createSprite(soldier.x,soldier.y,5,20); 
	bullet1.shapeColor = "yellow";
}