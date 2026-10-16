let size = 200;
let width = 220;
let height= 150;
let positionX= 350;
let positionY = 900;
let textSizeB1 = 120;
let textSizeB2 = 160;
let textSizeB3 = 200;
let shrink =  0.2;
let textS = 200;
function setup() {
  createCanvas(1920, 1080);
  background(0);
  red = random(0, 255);
  blue = random(0, 255);
  green = random(0, 255);
  rectMode(CENTER);
  textS  += 20;



}


function draw() {
  background(0);
  //BlockOne
  textSize(textS);  
  fill(red,green,blue);
  text("Hello World", positionX, positionY +200);
  //BlockTwo
  fill(red,green,blue);
  text("CodingSucks", positionX, positionY +600);

  //BlockThree
  fill(red,green,blue);
  text("Coder Zipasaurus", positionX, positionY +800);
  text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", positionX, positionY +1200);

  positionY -= 3;  
  textS -= shrink;

  
}