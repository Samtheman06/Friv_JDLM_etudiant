class Lazer {
constructor(x, y, lar, ep, couleur,dy){
  this.x = x
  this.y = y
  this.largeur = lar
  this.epaisseur = ep
  this.couleur= couleur
  this.dy = dy
}
dessiner(){
  c.fillStyle = this.couleur
  c.fillRect(this.x, this.y, this.largeur, this.epaisseur)
}
deplacer(dx){
  this.y = this.y + this.dy
}
}
