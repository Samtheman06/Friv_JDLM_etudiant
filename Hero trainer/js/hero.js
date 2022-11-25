const entierAleatoire = function(max){
//done un nombre plus petit que 1 random
  var t1 = Math.random()
  //on a fait x10
  var t2 = t1 * max
  //on a pris l'unite
  var entier = Math.floor(t2)

  return entier
}
const variation = function(){
  let a = entierAleatoire(200)
  let b = entierAleatoire(2)
  if(b == 1){
    a = a*-1
  }
  return a
}
const lerp= function(A, B, t) {
    return A + (B - A) * t;
}
const animer = function(){
  requestAnimationFrame(animer)
  c.clearRect(0,0,canvas.width, canvas.height)
background.draw()
background.draw()
avatar.draw()
sword.draw()

for(let i = 0;i<enemies.length;i++){
  enemy = enemies[i]
  enemy.draw()
}
//move
if(move == true){
  avatar.move(moveSpeed,0)
}
if(gravity == true){
  avatar.move(0,4.5)
  for(let i = 0;i<enemies.length;i++){
    enemy = enemies[i]
    enemy.move(0,3)
  }
}

canJump = false
if(avatar.y >= floorCoords - avatar.hauteur){
  avatar.y = floorCoords - avatar.hauteur
 canJump = true
}
if(jump){
if(counter>0){
   counter --}
   if(counter>0){
   avatar.y = lerp(avatar.y,destination,0.075)
}
}
if(knockback1){
  if(counterk <=40){
  destination = avatar.y -20
  avatar.y = lerp(avatar.y,destination,0.2)
  destination = avatar.x - 5
  avatar.x = lerp(avatar.x, destination,0.6)
  counterk++
}
}
if(knockback2){
  if(counterk <=40){
  destination = avatar.y -20
  avatar.y = lerp(avatar.y,destination,0.2)
  destination = avatar.x + 5
  avatar.x = lerp(avatar.x, destination,0.6)
  counterk++
}
}

if(avatar.tic >1000){
  avatar.tic = 0
}

if(lookingRight){
sword.x = avatar.x + avatar.largeur/2 -20
sword.y = avatar.y+30
sword.uwu = 1
}
if(lookingLeft){
sword.x = avatar.x - sword.largeur + 50
sword.y = avatar.y +20
sword.uwu = 0
}
if(swingSword){
  sword.ara = true
}
if(avatar.x> canvas.width && !end){
  avatar.x = -avatar.largeur
  changeBackground(index)

}
for(let i = 0;i<enemies.length;i++){
  enemy = enemies[i]
  if(enemy.y > floorCoords - enemy.hauteur){
    enemy.y = floorCoords - enemy.hauteur
  }
  if(end ===false){
  if(avatar.x > enemy.x){
    enemy.move(1,0)
    enemy.uwu = 0
  }
  if(avatar.x < enemy.x){
    enemy.move(-1,0)
    enemy.uwu = 1
  }
}
//attack
if(enemy.x>avatar.x && enemy.x<avatar.x+avatar.largeur -b&&  avatar.y + avatar.hauteur > enemy.y){
avatar.x = avatar.x-10
knockback1 = true
counterk = 0
avatar.hp = avatar.hp - enemy.dmg

}
if(enemy.x+enemy.largeur>avatar.x && enemy.x+enemy.largeur<avatar.x+avatar.largeur -b&&  avatar.y + avatar.hauteur > enemy.y){
 avatar.x = avatar.x+10
  knockback2 = true
  counterk = 0
   avatar.hp = avatar.hp - enemy.dmg
}
}
if(avatar.hp<=0){
  end = true

}

if(end){
avatar.largeur = 0
avatar.hauteur = 0
sword.largeur = 0
sword.hauteur = 0
c.font = "60px  Courier New"
c.fillStyle = "Red"
if(noEnemiesLeft){
  c.fillText("GAME OVER! YOU WON", middleh-300, middlev)
}
else{
c.fillText("GAME OVER! YOU LOST", middleh-375, middlev)
}
}

}
const changeBackground = function(a){
//a = old array position
index = a+1
if(index <numberOfBackgrounds){
let newImage = backgrounds[index]
background.image = newImage
room++
for(let i = 0;i<enemies.length;i++){
  enemies.splice(i)
}
spawnEnemies()
}
else{
  if(enemies.length ===0){
    noEnemiesLeft = true
  }
  end = true
}
}
const left = function(){
  avatar.uwu = 0
  avatar.ara = "true"
  moveSpeed = -4
  move = true
}
const right = function(){
avatar.uwu = 1
avatar.ara = "true"
moveSpeed = 4
move = true

}
const up = function(){

 destination = avatar.y - 250
 jump = true
counter = 40
}
const spawnZombie = function(number){
  for(let i = 0; i<number; i++){
    let c = variation()
  enemies.push(new Enemy(spriteZombie,canvas.width+c,canvas.height,150,100,20,10,0,true))
}
}
const spawnEnemies = function(){
if(room<numberOfBackgrounds){
  spawnZombie(room)
}
else{
  spawnBoss()
}
}
const spawnBoss = function(){
  enemies.push(new Enemy(spriteZombie,canvas.width,canvas.height,400,200,20,70,0,true))
  checkBoss= true
}
const collision = function(){
for(let i = 0;i<enemies.length;i++){
  enemy = enemies[i]
  if(enemy.hp<=0){
    enemies.splice(i,1)
  }
}
}
const swing = function(){
  if(lookingLeft){
    for(let i = 0;i<enemies.length;i++){
      enemy = enemies[i]
      if(sword.x < enemy.x+enemy.largeur && sword.x> enemy.x && sword.y + sword.hauteur > enemy.y){
        enemy.hp = enemy.hp - 10
        collision()
      }
    }
  }
  if(lookingRight){
    for(let i = 0;i<enemies.length;i++){
      enemy = enemies[i]
      if(sword.x+ sword.largeur > enemy.x && sword.x <enemy.x && sword.y + sword.hauteur > enemy.y){
        enemy.hp = enemy.hp - 10
        collision()
      }
    }
  }
}
const hit = function(dmg){

}
//canvas
var canvas = document.getElementById("canvas1")
canvas.width = window.innerWidth*0.9
canvas.height = window.innerHeight*0.8
const middlev = window.innerHeight*0.8/2
const middleh = window.innerWidth*0.9/2
var c = canvas.getContext("2d")
//backgrounds
const b1 = document.getElementById("back1")
const b2 = document.getElementById("back2")
const b3 = document.getElementById("back3")
const b4 = document.getElementById("back4")
const backgrounds = [b1,b2,b3,b4]
let background = new Background(b1,0,0,canvas.width,canvas.height)
let = index = 0
let numberOfBackgrounds = backgrounds.length
let room = 1
//avatar
const avatarSprite = document.getElementById("sprite")
const avatarImg = new Sprite(avatarSprite, 526,226,6,2)
let moveSpeed = 0
let move = false
let jump = false
let canJump = false
let counter = 0
let counterk = 0
let destination = 0
let avatar = new Avatar(avatarImg, 10,500,200,150,100,1,"false")
let lookingRight = true
let lookingLeft = false
let b = avatar.largeur/2
let knockback1 = false
let knockback2 = false
//floor
let floorCoords = canvas.height*0.9
let gravity = true
//sword
const imgSword = document.getElementById("spriteSword")
const spriteSword = new Sprite(imgSword,545,190,6,2)
let sword = new Sword(spriteSword,100,100,100,100,1,false)
let swingSword = false
let reload = true
//zombies
const imgZombie = document.getElementById("spriteZombie")
const spriteZombie = new Sprite(imgZombie,426,287,6,2)
let checkBoss = false
//boss
//const imgBoss = document.getElementById("ImageBoss")
//general
let end = false
let enemies = []
let noEnemiesLeft = false
animer()
spawnEnemies()
//intervals
setInterval( function(){
if(reload ===false){
reload = true
}

} ,500)
document.onkeydown = function (event){
    switch (event.keyCode) {
         case 65:
            c.clearRect(0,0,canvas.width, canvas.height);
            left();
            lookingRight = false
            lookingLeft = true
            break;
         case 87:
            c.clearRect(0,0,canvas.width, canvas.height);
            if(canJump){
            up();
          }
            break;
         case 68:
            c.clearRect(0,0,canvas.width, canvas.height);
            right();
            lookingRight = true
            lookingLeft = false
            break;
      }
   }
document.onclick = function(event){
  if(reload){
 swingSword = true
 sword.counter = 6
 swing()
 reload = false
   }
 }
document.onkeyup = function (event){
    switch (event.keyCode) {
         case 65:
            c.clearRect(0,0,canvas.width, canvas.height);
            avatar.ara = "false"
            move = false
            break;
         case 68:
            c.clearRect(0,0,canvas.width, canvas.height);
            avatar.ara = "false"
            move = false
            break;
      }
   }
