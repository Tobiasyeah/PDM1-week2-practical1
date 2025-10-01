function setup () {
    createCanvas (500,400)
}

function draw () {
    background(255)
    noStroke()
    fill(0,0,255)
    rect(0,0,width/2,height)
    fill(100,0,255)
    rect(width/2,0,width/2,height/2)
    fill(0)
    rect(width/2,height/2,width/4,height/2)
    fill(200,0,255)
    rect(width*0.75,height/2,width/4,height/4)
    fill(255,0,150)
    rect(width*0.75,height*0.75,width/4,height/4)
}