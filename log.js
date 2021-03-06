class Log {

    constructor(x,y,height,angle){
    
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
    
        this.w = 20;
        this.h = height;
        this.log = Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.log,angle)
       
       
        World.add(world,this.log);
    
    }
    
    
    display(){
    
        var pos = this.log.position;
        var angle = this.log.angle;
    
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        stroke('blue');
        strokeWeight(9);
        fill(255);
        rect(0,0,this.w,this.h);
        pop();
    
    }
    
    }