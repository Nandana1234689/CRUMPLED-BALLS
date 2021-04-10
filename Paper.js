class Paper {
    constructor(){
        var order={
            'restitution':0.3, 
            'friction':0, 
            'density':1.2
        
        }
        this.body = Bodies.rectangle(200,500,80,80,order);
        World.add(world,this.body);
        this.img = loadImage("paper.png");
    
        
    }
    display(){
       
        push();
        translate(this.body.position.x,this.body.position.y); 
        rotate(this.body.angle); 
        imageMode(CENTER); 
        image(this.img, 0, 0, 80,80);
        pop()
    }
}
