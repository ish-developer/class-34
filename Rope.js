class Rope{
  constructor(bodyA,pointB){
   var options = {
    bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
   }
   this.rope=Constraint.create(options);
   this.pointB = pointB;
   World.add(world,this.rope);

  }

  display(){
    var body = this.rope.bodyA.position;
    var point=this.pointB;
     push();
     stroke(48, 22, 8);
      strokeWeight(3);
     line(body.x,body.y,point.x,point.y);
   pop();
  }
}
