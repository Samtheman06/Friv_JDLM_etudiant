class Tuile {
  constructor(img, x, y, l, h, cheese, index, row, col, old) {
    this.image = img
    this.x = x
    this.y = y
    this.largeur = l
    this.hauteur = h
    this.cheese = cheese
    this.index = index
    this.row = row
    this.col = col
    this.old = old

    this.indexTranche = this.cheese //Index de l'image affiché
    this.trancheL = this.image.largeur/this.image.nbrImagesHoriz
    this.trancheH = this.image.hauteur/this.image.nbrImagesVert
  }

generate() {
  c.drawImage(
    this.image.image, //Object image
    this.indexTranche*this.trancheL, 0, this.trancheL, this.trancheH,
    this.x, this.y, this.largeur, this.hauteur //Destination
  )

}

movex(newx){
  this.x = newx
}

movey(newy){
  this.y = newy
}

}
