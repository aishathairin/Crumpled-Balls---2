class Paper
{
    constructor (x,y,diameter)
    {
        var options = 
        {
            isStatic : false,
            'restitution' : 1.0,
            'friction' : 0,
            'density' : 1.2
        }
     this.image = loadImage("Images/paper.png");
     this.x = x;
     this.y = y;
     this.diameter = diameter;
     this.body = Bodies.circle(this.x,this.y,(this.diameter - 20)/2,options);
     World.add(world,this.body);
    }
    display(){
        var paperPosition = this.body.position;
        push ();
        fill ("green");
        translate(paperPosition.x,paperPosition.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter);
        pop ();
}
}