var hr,sc,mn;
var scangle;
var minangle,hourangle;

function setup() {
  createCanvas(800,400);



  angleMode(DEGREES);
  
  
}

function draw() {
  background(25);
  translate(200,200)
  rotate(-90)  
  
  hr = hour();
  mn = minute();
  sc = second();
  

scangle = map(sc,0,60,0,360); 
minangle = map(mn,0,60,0,360);
hourangle = map(hr%12,0,60,0,360);

push()
  
  stroke(255,0,0);
  strokeWeight(7);
  rotate(scangle);
  line(0,0,100,0);
  
  pop();
  push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(minangle);
  line(0,0,80,0)
  pop();

push();
stroke(0,0,255);
strokeWeight(7);
rotate(hourangle);
line(0,0,60,0);
pop();
point(0,0)
strokeWeight(10);
stroke(255,0,0);
noFill();
arc(0,0,300,300,0,scangle);

strokeWeight(10);
stroke(0,255,0);
noFill();
arc(0,0,280,280,0,minangle);

strokeWeight(10);
stroke(0,0,255);
noFill();
arc(0,0,260,260,0,hourangle);


  drawSprites();
}
/*function hou(){
  let h = hour();
  text('Current hour:\n' + h, 5, 50);

}
function min(){

  let m = minute();
text('Current minute: \n' + m, 5, 50);

}
function sec(){
  let s = second();
  text('Current second: \n' + s, 5, 50);

}*/