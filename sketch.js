function setup() {
    //width, height
createCanvas(400, 800);
    background(0,0,0);
}

function draw() {
 if (mouseIsPressed == true){
    fill(255, 255, 255, 100)
ellipse(mouseX, mouseY, 20, 20)
}
   
}

function mousePressed() { 
    ellipse(mouseX, mouseY, 40, 40)
   }

function mouseReleased() {
  ellipse(mouseX, mouseY, 40, 40)
}