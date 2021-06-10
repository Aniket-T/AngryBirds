class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.Visiblity = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visiblity = this.Visiblity-0.5;
      tint(255,this.Visiblity);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
/*
this.trajectory = [[0.5,0.7], [2,4], [3,8], [6,54]];

this.trajectory[0][0], this.trajectory[0][1];

this.trajectory[1][0], this.trajectory[1][1];
this.trajectory[2][0], this.trajectory[2][1];
this.trajectory[3][0], this.trajectory[3][1]; */
