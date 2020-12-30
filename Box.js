class Box {
    constructor(x, y) {

      var options={
        isStatic :false
      }
     
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, 30, 40,options);
      this.width = 30;
      this.height =40;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <3) {
        var pos =this.body.position;
        var angle = this.body.position.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
       rect(0,0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body)
        push();
        this.visibility =  this.visibility -5;
        tint(255, this.visibility);
        pop();
      }
    }
  }
  