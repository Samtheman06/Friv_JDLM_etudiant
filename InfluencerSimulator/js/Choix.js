class Choix{
 constructor(sprite, x, y, l, h, uwu){
   this.sprite = sprite
   this.x = x
   this.y = y
   this.largeur = l
   this.hauteur = h
   this.uwu =uwu
   this.indexTranche = 0  //Index de l'image affichée
   this.trancheL = this.sprite.largeur/this.sprite.nbrImagesHoriz
   this.trancheH = this.sprite.hauteur/this.sprite.nbreImagesVert
   this.indexY = 0
   this.indexX = 0
 }
 dessiner(){

   this.indexTranche= this.uwu-1
   if(this.indexTranche > this.sprite.nbrImagesHoriz-1) {
     this.indexTranche =  this.indexTranche - this.sprite.nbrImagesHoriz
     this.indexY = this.trancheH
   }
   if(this.indexTranche == 2){
     this.indexY = 0
   }
   if(this.uwu ==8){
     this.indexY = this.trancheH

   }
 this.indexX =this.indexTranche*this.trancheL

 c.drawImage(
   this.sprite.image,
   this.indexX, this.indexY , this.trancheL, this.trancheH,
   this.x, this.y, this.largeur, this.hauteur
 )

 }


}
