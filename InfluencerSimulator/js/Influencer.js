
class Influencer{
constructor(img,x, y, lar, h){
  this.x = x
  this.y = y
  this.largeur = lar
  this.hauteur = h
  this.image= img
}
dessiner(){
  c.drawImage(
    this.image, //Object image
    this.x, this.y, this.largeur, this.hauteur   //Destination
  )
}
deplacer(x, y){
  this.x = x
  this.y = y
}
}
