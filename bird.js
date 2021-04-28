class Bird{

    constructor(x,y){
    
        var options = {
            restitution : 0.5,
            friction : 1.0,
            density : 0.5
        }
    
        this.bird= Bodies.rectangle(x,y,50,50,options);
        this.w = 50;
        this.h = 50;
        World.add(world,this.bird);
    
    }
    
    
    display(){
    
        var pos = this.bird.position;
       
    
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y)
        
        rectMode(CENTER);
        stroke('red');
        strokeWeight(7);
        fill(255);
        rect(0,0,this.w,this.h);
        pop();
    
    }
    
    }