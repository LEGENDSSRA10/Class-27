class Sling
{
   constructor(bodyA, bodyB)
   {
       var options = 
       {
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.05,
           length: 15,
       }
       this.sling = Constraint.create(options);
       World.add(world, this.sling);
   }
   display()
   {
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.bodyB.position;
       strokeWeight(5);
       stroke("black");
       line(pointA.x, pointA.y, pointB.x, pointB.y);
   }
}