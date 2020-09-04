class Box
{
    constructor(x,y,width,height)
    {
        var options = {
            restitution: 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height = height;

        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,this.body.position.y, this.width,this.height);
    }
}

