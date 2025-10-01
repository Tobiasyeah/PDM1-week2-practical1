function setup() {
    createCanvas(500,500)
}

function draw() {
    background(200,0,255)
    rectMode(CENTER)
    fill(0,255,100)
    square(mouseX,mouseY,100)
    square(mouseX-100,mouseY-100,100)
    square(mouseX+100,mouseY+100,100)
}