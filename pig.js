
class Pig{

    constructor(x,y){
    
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
    
        this.box = Bodies.rectangle(x,y,40,40,options);
        this.w = 40;
        this.h = 40
        World.add(world,this.box);
    
    }
    
    
    display(){
    
        var pos = this.box.position;
        var angle = this.box.angle;
    
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill('green');
        rect(0,0,this.w,this.h);
        pop();
    
    }
    
    }