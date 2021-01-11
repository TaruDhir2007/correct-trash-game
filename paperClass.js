class waste{
    constructor(x, y, radius, options){
        var options = {
       'isStatic' : false,
       'density' : 1.2,
       'friction ': 1,
       'restitution' : 0}
       this.body = Bodies.circle(100, 640, 5, options)
       this.image = loadImage("paper.png");
       World.add(world, this.body)

    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 70, 70);
      pop();
    }
}