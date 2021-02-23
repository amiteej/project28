class stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2,
        }
        this.r = r;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x, y, r,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
       // push()
       // translate(mangoPos.x, mangoPos.y);
        // rectMode(CENTER);
        //rotate(this.body.angle)
        //fill(255, 0, 255)
        imageMode(CENTER);
        //ellipseMode(CENTER);
        image(this.image, pos.x, pos.y, this.r * 2, this.r * 2)
        //pop()
    }
}