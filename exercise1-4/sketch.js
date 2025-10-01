function setup() {
    createCanvas(600,600)

}

function draw() {
    background(255)
    fill(255,0,255)
    rectMode(CENTER)
    rect(300,300,(mouseX - width/2) * 2,(mouseY-height/2)* 2)

}