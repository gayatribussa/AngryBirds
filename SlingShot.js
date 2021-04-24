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
        World.add(world, this.sling);
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    //this.sling.body (not =) bird.body
    fly() {
        this.sling.bodyA = null;
    }

}