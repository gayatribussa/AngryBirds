class SlingShot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.4
        }
        this.pointB = point2;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    display() {
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48, 22, 3);
            if (pointA.x < 220) {
                strokeWeight(8);
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3, pointA.x - 25, pointA.y - 10, 15, 30);
            }
            else {
                strokeWeight(4);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x +30 ,pointB.y);
                image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);
            }
            pop();
        }
    }
    //this.sling.body (not =) bird.body
    fly() {
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

}