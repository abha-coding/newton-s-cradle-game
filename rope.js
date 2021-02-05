class Rope {
    constructor(bodyA,pointB,offset){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0,
            length: 200
        }

        this.pointB = pointB;
        this.offset = offset;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){

        var posA=this.body.bodyA.position;
        var posB=this.pointB;
        push();

        stroke("pink");
        strokeWeight(7);

        line(posA.x,posA.y,posB.x + this.offset,posB.y);
        pop();
    }

}