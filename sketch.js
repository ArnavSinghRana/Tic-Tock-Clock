var sec
var hours
var minutes
var secAngle
var hoursAngle
var minutesAngle
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

}

function draw() {
  background(255,255,255);
  translate(400,200);
  rotate(-90);
  sec=second();
  secAngle=map(sec,0,60,0,360);
  push ();
  rotate(secAngle)
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,50,0);
  pop ();
  
  
  noFill();
  stroke(255,0,0);
  strokeWeight(10);
  arc(0,0,300,300,0,secAngle);



  drawSprites();
}