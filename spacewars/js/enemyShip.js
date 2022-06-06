class EnemyShip {
constructor(img,x, y, lar, ep){
  this.image = img
  this.x = x
  this.y = y
  this.largeur = lar
  this.epaisseur = ep
}
dessiner(){
  c.drawImage(this.image, this.x, this.y, this.largeur, this.epaisseur)
  //c.fillStyle = "red"
//  c.fillRect(this.x, this.y, this.largeur, this.epaisseur)
}
deplacer(x, y){
  this.x = x
  this.y = y
}
}
