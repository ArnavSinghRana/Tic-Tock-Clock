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
  hours=hour();
  minutes=minute();
  hoursAngle=map(hours % 12,0,12,0,360);
  minutesAngle=map(minutes,0,60,0,360);
  secAngle=map(sec,0,60,0,360);
  push ();
  rotate(hoursAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line(0,0,70,0);
  pop();

  push ();
  rotate(minutesAngle);
  stroke(0,0,255);
  strokeWeight(10);
  line(0,0,60,0);
  pop();

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
  stroke(0,0,255);
  arc(0,0,280,280,0,minutesAngle);
  stroke(0,255,0);
  arc(0,0,200,200,0,hoursAngle);



  drawSprites();
}