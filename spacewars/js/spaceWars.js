"use strict"
const entierAleatoire = function(max){
var t1 = Math.random()
var t2 = t1*max
var entier = Math.floor(t2)
return entier
}
const shoot = function(source, x, y){
  if(source==1){
  if(lazersRed.length >3){return}
  else{
  lazerX = ship.x + ship.largeur/2
  lazerY = ship.y -20
  lazersRed.push( new Lazer(lazerX, lazerY, 3, 15, "red", -2.5) )
}
}
  else if(source==2){


  lazerX = x + 37.5
  lazerY = y +75
  let index = entierAleatoire(variation.length)

  lazerX = x + 37.5 + variation[index]

  lazersBlue.push( new Lazer(lazerX, lazerY, 3, 15, "#0080ff", 2.5))


}
}
const spawnEnemyShip = function(n){

for(let i = n; i > 0; i--){
if(positions.length ===0){
  positions = [canvas.width*0.1221498,canvas.width*0.244299,canvas.width*0.366449,canvas.width*0.488599,canvas.width*0.610749,canvas.width*0.732899,canvas.width*0.8550488]
  }
  enemyShipY = 50

  let index = entierAleatoire(positions.length)
  enemyShipX = positions[index]
  positions.splice(index,1)
  enemyShips.push( new EnemyShip(enemyShipImg,enemyShipX, enemyShipY, 75, 75))
  console.log(enemyShipX)
}
}
const levels = function(){}
const endGame = function(){
  ship = null
  ship = new Ship(shipImg,shipX,shipY,0,0)
  c.font = "60px  Courier New"
  c.fillStyle = "Red"
  c.fillText("GAME OVER!", 130, 300)
  c.font = "20px  Courier New"
  c.fillStyle = "Red"
  c.fillText("Points:",250, 330)
  c.fillText(points,340, 330)

  animationActive = false
}
const animer = function(){
 
if(animationActive === false){return}
if(animationActive === true){
  c.clearRect(0,0,canvas.width, canvas.height)
ship.dessiner()
for (let i = 0; i< lazersRed.length; i++){
let lazer = lazersRed[i]
lazer.dessiner()
lazer.deplacer()
}
for (let i = 0; i< lazersBlue.length; i++){
let lazer = lazersBlue[i]
lazer.dessiner()
lazer.deplacer()
}
for (let i = 0; i< enemyShips.length; i++){
let enemyShip = enemyShips[i]
enemyShip.dessiner()
}
for(let i=0; i<lazersRed.length; i++){
    let lazer = lazersRed[i]
for(let j=0; j<enemyShips.length; j++){
    let enemyShip = enemyShips[j]
    if(  lazer.y < enemyShip.y+enemyShip.largeur && lazer.x > enemyShip.x && lazer.x < enemyShip.x + enemyShip.largeur ){
 enemyShips.splice(j,1)
 shipDeleted++
 points++
//lazers.sploce(i)

    }
}
}
for(let i=0; i<lazersRed.length; i++){
    let lazer = lazersRed[i]
    if(lazer.y < 0){
      lazersRed.splice(i,1)
    }
  }
for(let i=0; i<lazersBlue.length; i++){
    let lazer = lazersBlue[i]
    if(lazer.y < 0){
      lazersBlue.splice(i,1)
    }
  }
if(animationActive === true){
for(let i=0; i<lazersBlue.length; i++){
    let lazer = lazersBlue[i]
    if(lazer.y > ship.y  &&  lazer.y < ship.y + ship.epaisseur && lazer.x > ship.x + lazer.largeur && lazer.x < ship.x + ship.largeur && lazer.y ){
  endGame()
}
}
}
//canvas width =614/392(when console opened)
}}
//make canva
var points = 0
var time = 0
var variation = [-30,-20,-10,0,10,20,30]
var nbreEnemy = 0
var shipDeleted = 0
var animationActive = true
var canvas = document.getElementById("canvas1")
canvas.width = window.innerWidth*0.4
canvas.height = window.innerHeight*0.85

var c = canvas.getContext("2d")
var positions = [canvas.width*0.1221498,canvas.width*0.244299,canvas.width*0.366449,canvas.width*0.488599,canvas.width*0.610749,canvas.width*0.732899,canvas.width*0.8550488]


//make Ship
var shipImg = document.getElementById("ship")
var ship = new Ship(shipImg,shipX,shipY,50,50)
var sourisX = 0 + margeGauche
var sourisY = 0
var shipX = 0
var shipY = canvas.height-80
var margeGauche = (window.innerWidth - canvas.width)/2
//make lazer
var lazerX = 0
var lazerY = 0
var lazersRed = []
var lazersBlue = []

var enemyShipImg = document.getElementById("enemyShip")
var enemyShips = []
var enemyShipX = 0
var enemyShipY = 0
animer()
setInterval( function(){
  console.log(nbreEnemy, shipDeleted)
  if( nbreEnemy === shipDeleted){
    shipDeleted = 0
  nbreEnemy = entierAleatoire(6)
  nbreEnemy++
  spawnEnemyShip(nbreEnemy)

}

}, 1000)
setInterval( function(){ animer()}
, 10)

//
setInterval( function(){
  for (let i = 0; i< enemyShips.length; i++){
  let enemyShip = enemyShips[i]
  shoot(2, enemyShip.x, enemyShip.y)
  }
}, 700)
window.addEventListener("mousemove", function(){
  sourisX = window.event.clientX
  sourisY = window.event.clientY
  shipX = sourisX - margeGauche
  if(shipX < 0){
    shipX = 0
  } else if (shipX + ship.largeur > canvas.width){
    shipX = canvas.width - ship.largeur
  }
  ship.deplacer(shipX, shipY)

}
)
document.addEventListener('keydown', function(event){
  if(event.code === 'Space' && animationActive===true){
  shoot(1)
  }
  else{

  }
  }
)
