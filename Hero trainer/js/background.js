class Background{
constructor(img,x, y, lar, h){
  this.image = img
  this.x = x
  this.y = y
  this.largeur = lar
  this.hauteur = h
  this.image= img
}
draw(){
  c.drawImage(
    this.image, //Object image
    this.x, this.y, this.largeur, this.hauteur   //Destination
  )
}
}
