class Box {

constructor(x,y,width,height){

    var options = {
        restitution : 0.8,
        friction : 1.0,
        density : 1.0
    }

    this.box = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height
    World.add(world,this.box);

}


display(){

    var pos = this.box.position;
    var angle = this.box.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    stroke('orange');
    strokeWeight(4);
    fill(255);
    rect(0,0,this.w,this.h);
    pop();

}

}