function setup() {
    createCanvas(800,800)
}


function draw() {
   let centreX=400
   let centreY=300
    stroke(0)
    strokeWeight(1)
    background(255)
    rectMode(CENTER)
    fill (255,255,0)
    square(mouseX,mouseY,200)
    fill(255)
    ellipse(mouseX-50,mouseY-50,40,60)
    ellipse(mouseX+50,mouseY-50,40,60)
    fill(0)
    circle(mouseX-50,mouseY-50,5)
    circle(mouseX+50,mouseY-50,5)
    noStroke()
    fill(255,255,0)
    rect(mouseX-50,mouseY-80,60,30)
    rect(mouseX+50,mouseY-80,60,30)
    fill(0)
    stroke(0)
    line(mouseX-20,mouseY-20,360,340)
    line(mouseX+20,mouseY-20,440,340)
    circle(mouseX-20,mouseY+30,15)
    circle(mouseX+20,mouseY+30,15)
    fill(255,0,0)
    noStroke()
    rect(mouseX,mouseY+60,50,5)
    fill(0)
    rect(mouseX,mouseY-65,150,15)
    rectMode(CORNER)
    stroke(0)
    fill(255)
    rect(mouseX-100,mouseY+100,200,20)
    fill(150,75,0)
    rect(mouseX-100,mouseY+120,200,20)
    fill(300,300,0)
    rect(mouseX-40,mouseY+140,5,100)
    rect(mouseX+30,mouseY+140,5,100)
    fill(255,255,0)
    strokeWeight(3)
    line(mouseX-100,mouseY+20,240,350)
    line(mouseX+100,mouseY+20,560,350)

}
let centreX=mouseX
let centreY=mouseY