class Avatar{
 constructor(sprite, x, y, l, h,hp, uwu,ara){
   this.sprite = sprite
   this.x = x
   this.y = y
   this.largeur = l
   this.hauteur = h
   this.hp = hp
   this.uwu =uwu
   this.ara = ara
   this.indexTranche = 0  //Index de l'image affichée
   this.trancheL = this.sprite.largeur/this.sprite.nbrImagesHoriz
   this.trancheH = this.sprite.hauteur/this.sprite.nbreImagesVert
   this.indexY = 0
   this.indexX = 0
   this.tic = 0
   this.changerImage = 20
 }
 draw(){
   if(this.ara == "true"){
   this.tic++
 }
   if (this.tic > 10000){
     this.tic = 0
   }

   if (this.tic % this.changerImage == 2){
     this.indexTranche++
     if(this.indexTranche > this.sprite.nbrImagesHoriz - 1) {
       this.indexTranche = 0
     }
   }
this.indexX = this.indexTranche*this.trancheL
this.indexY = this.uwu*this.trancheH
 //   this.indexTranche= this.uwu-1
 //   if(this.indexTranche > this.sprite.nbrImagesHoriz-1) {
 //     this.indexTranche =  this.indexTranche - this.sprite.nbrImagesHoriz
 //     this.indexY = this.trancheH
 //   }
 //   // if(this.indexTranche == 2){
 //   //   this.indexY = 0
 //   // }
 //   // if(this.uwu ==8){
 //   //   this.indexY = this.trancheH
 //   //
 //   // }
 // this.indexX =this.indexTranche*this.trancheL

 c.drawImage(
   this.sprite.image,
   this.indexX, this.indexY , this.trancheL, this.trancheH,
   this.x, this.y, this.largeur, this.hauteur
 )

 }
move(dx,dy){
  this.x = this.x +dx
  this.y = this.y +dy
}

}
