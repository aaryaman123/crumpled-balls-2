class Trash{
    constructor(x,y,width,height){
        var options={
            density: 1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white");
        fill(200);
        rect(0,0,this.width,this.height);
        pop();
    }
}