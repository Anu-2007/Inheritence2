class Box extends Base{
  constructor (x,y)
  {
    super(x,y,50,50);    //calling base cls constructor
    this.image= loadImage("sprites/wood1.png");
  }
}
//Box class is inherting base class