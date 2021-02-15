class blueprint{
    constuctor(x,y,width,height){
        var options = {
            isStatic: false, 
            restitution: 0, 
            friction: 1,
            density: 1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    
    this.image = loadImage("images/stone.png")
    }

    display(){
        imageMode(CENTER);
        image(this.image, x, y, this.width, this.height); 
    }
}