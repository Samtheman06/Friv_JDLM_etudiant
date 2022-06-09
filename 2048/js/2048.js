"use strict"

var high_score = 0
var score = 0
var bg_color = 0
var refresh = 0
var tuiles = []
var start = 1
var uwu = 0
var q = 0
var result = null
var order = []
var h = 0
var tuilepos = []
var correctOrder = []

//Défénir l'espace de jeu et obtenir un contexte 2d pour dessiner
var canvas = document.getElementById("canvas1")
var c = canvas.getContext("2d")
var tuile_sprite = document.getElementById("sprite")
var tuile_image
{//text start
c.font = "15px arial"
c.fillStyle = "black"
var txt = "Peser sur une des flèches ← ↑ → ↓"
c.fillText(txt, (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
}

setInterval(function(){f = 0
}, 25)
setInterval(function(){q = 0
}, 1000)

const restart = function() {
  refresh++
  tuiles = []
  x = [
    gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx, 2*gapx + wide, 3*gapx + 2*wide,4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide ]
  y = [
    gapy, gapy, gapy, gapy, 2*gapy + high, 2*gapy + high, 2*gapy + high, 2*gapy + high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high,]
  start = 0
}

const bg_change = function() {
  if (start < 1 || refresh > 1) {
    start_no()
  }
  else {
    start_yes()
  }
}

  const start_no = function() {
    if (bg_color === 0) {
    document.body.style.backgroundColor = "#30241c";
    document.getElementById("titre").style.color = "gray";
    document.getElementById("credits").style.color = "gray";
    document.getElementById("menu").style.color = "gray";
    // document.getElementById("undo").style.color = "gray";
    document.getElementById("restart").style.color = "gray";
    document.getElementById("bg_color").style.color = "gray";
    // document.getElementById("p1").style.color = "gray";
    // document.getElementById("p2").style.color = "gray";
    bg_color = 1
    document.getElementById("bg_color").innerHTML = "Light mode"
    c.clearRect(0,0,canvas.width, canvas.height);
    c.font = "15px arial"
    c.fillStyle = "gray"
    var txt = "Peser sur une des flèches ← ↑ → ↓"
    c.fillText("Peser sur une des flèches ← ↑ → ↓", (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
  }
    else if (bg_color === 1) {
    document.body.style.backgroundColor = "#907c64";
    document.getElementById("titre").style.color = "white";
    document.getElementById("credits").style.color = "white";
    document.getElementById("menu").style.color = "white";
    // document.getElementById("undo").style.color = "white";
    document.getElementById("restart").style.color = "white";
    document.getElementById("bg_color").style.color = "white";
    // document.getElementById("p1").style.color = "white";
    // document.getElementById("p2").style.color = "white";
    bg_color = 0
    document.getElementById("bg_color").innerHTML = "Dark mode"
    c.clearRect(0,0,canvas.width, canvas.height);
    c.font = "15px arial"
    c.fillStyle = "black"
    var txt = "Peser sur une des flèches ← ↑ → ↓"
    c.fillText("Peser sur une des flèches ← ↑ → ↓", (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)

    }
}

  const start_yes = function() {
    if (bg_color === 0) {
    document.body.style.backgroundColor = "#30241c";
    document.getElementById("titre").style.color = "gray";
    document.getElementById("credits").style.color = "gray";
    document.getElementById("menu").style.color = "gray";
    // document.getElementById("undo").style.color = "gray";
    document.getElementById("restart").style.color = "gray";
    document.getElementById("bg_color").style.color = "gray";
    // document.getElementById("p1").style.color = "gray";
    // document.getElementById("p2").style.color = "gray";
    bg_color = 1
    document.getElementById("bg_color").innerHTML = "Light mode"
    c.fillStyle = "gray"
  }
    else if (bg_color === 1) {
    document.body.style.backgroundColor = "#907c64";
    document.getElementById("titre").style.color = "white";
    document.getElementById("credits").style.color = "white";
    document.getElementById("menu").style.color = "white";
    // document.getElementById("undo").style.color = "white";
    document.getElementById("restart").style.color = "white";
    document.getElementById("bg_color").style.color = "white";
    // document.getElementById("p1").style.color = "white";
    // document.getElementById("p2").style.color = "white";
    bg_color = 0
    document.getElementById("bg_color").innerHTML = "Dark mode"
    c.fillStyle = "black"
    }
}


document.onkeydown = function (event){
    switch (event.keyCode) {
         case 37:
            c.clearRect(0,0,canvas.width, canvas.height);
            left();
            break;
         case 38:
            c.clearRect(0,0,canvas.width, canvas.height);
            up();
            break;
         case 39:
            c.clearRect(0,0,canvas.width, canvas.height);
            right();
            break;
         case 40:
            c.clearRect(0,0,canvas.width, canvas.height);
            down();
            break;
      }
   }

{// variables tuiles
var tuilex = 0
var tuiley = 0
var gapx = 7
var gapy = 3
var wide = 66.5
var high = 67/2
var x = [
  gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx, 2*gapx + wide, 3*gapx + 2*wide,4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide ]
var y = [
  gapy, gapy, gapy, gapy, 2*gapy + high, 2*gapy + high, 2*gapy + high, 2*gapy + high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high,]
var space = true
var f = 0
var l = 0
}

const remove = function(a){
if (q===0) {
tuiles.splice(a,1)
q++
}}

const entierAleatoire = function(max){
   //t1 sera un nombre réel inclus dans l'intervalle [0, 1[
   var t1 = Math.random() //https://www.w3schools.com/js/js_random.asp
   //t2 sera un nombre réel inclus dans l'intervalle [0, max[
   var t2 = t1 * max
   //entier sera un nombre entier inclus dans l'ensemble {0, 1, ..., max-1}
   var entier = Math.floor(t2) //https://www.w3schools.com/jsref/jsref_floor.asp
   //Afficher les variable à la console pour mieux comprendre
   //console.log("t1", t1, "t2", t2, "entier", entier)

   return entier
}

const spawn = function(){
  if(space == false){
    space = true
  }
  let i = entierAleatoire(x.length)
    tuilex = x[i]
    tuiley = y[i]
    for (let i = 0; i < tuiles.length; i++) {
      let tuile = tuiles[i]
      if(tuile.x === tuilex && tuile.y === tuiley){
        space = false
        if(f === 0){
          spawn()
        f++
        }

      }
    }

    if(space === true){
    tuile_image = new Sprite(tuile_sprite,1313,108,11,1 )
    tuiles.push(new Tuile(tuile_image,tuilex, tuiley, wide, high, 0, 0, 0, 0, 0))
    }
}

const generate = function(){
  // console.log(tuiles)
  c.clearRect(0,0,canvas.width, canvas.height)
  requestAnimationFrame(generate)

  if(start == 0){
  c.font = "15px arial"
  c.fillStyle = "black"
  var txt = "Peser sur une des flèches ← ↑ → ↓"
  c.fillText(txt, (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
  }

  for (let i = 0; i < tuiles.length; i++) {
    let tuile = tuiles[i]
      // console.log(tuile.old)
      tuile.generate()
  }

  //index tuiles
  for (let i = 0; i < tuiles.length; i++ ) {
    let tuile = tuiles[i]
    tuile.index = (tuile.x / (gapx + wide) + gapx) * (tuile.y / (gapy + high) + gapy)

    if (tuile.x == gapx && tuile.y == gapy){
      tuile.index = 1
      tuile.row = 1
      tuile.col = 1
    }
    if (tuile.x == 2*gapx + wide && tuile.y == gapy){
      tuile.index = 2
      tuile.row = 1
      tuile.col = 2
    }
    if (tuile.x == 3*gapx + 2*wide && tuile.y == gapy){
      tuile.index = 3
      tuile.row = 1
      tuile.col = 3
    }
    if (tuile.x == 4*gapx + 3*wide && tuile.y == gapy){
      tuile.index = 4
      tuile.row = 1
      tuile.col = 4
    }

    if (tuile.x ==  gapx && tuile.y == 2*gapy + high){
      tuile.index = 5
      tuile.row = 2
      tuile.col = 1
    }
    if (tuile.x == 2*gapx + wide && tuile.y == 2*gapy + high){
      tuile.index = 6
      tuile.row = 2
      tuile.col = 2
    }
    if (tuile.x == 3*gapx + 2*wide && tuile.y == 2*gapy + high){
      tuile.index = 7
      tuile.row = 2
      tuile.col = 3
    }
    if (tuile.x == 4*gapx + 3*wide && tuile.y == 2*gapy + high){
      tuile.index = 8
      tuile.row = 2
      tuile.col = 4
    }

    if (tuile.x ==  gapx && tuile.y == 3*gapy + 2*high){
      tuile.index = 9
      tuile.row = 3
      tuile.col = 1
    }
    if (tuile.x == 2*gapx + wide && tuile.y == 3*gapy + 2*high){
      tuile.index = 10
      tuile.row = 3
      tuile.col = 2
    }
    if (tuile.x == 3*gapx + 2*wide && tuile.y == 3*gapy + 2*high){
      tuile.index = 11
      tuile.row = 3
      tuile.col = 3
    }
    if (tuile.x == 4*gapx + 3*wide && tuile.y == 3*gapy + 2*high){
      tuile.index = 12
      tuile.row = 3
      tuile.col = 4
    }

    if (tuile.x == gapx && tuile.y == 4*gapy + 3*high){
      tuile.index = 13
      tuile.row = 4
      tuile.col = 1
    }
    if (tuile.x == 2*gapx + wide && tuile.y == 4*gapy + 3*high){
      tuile.index = 14
      tuile.row = 4
      tuile.col = 2
    }
    if (tuile.x == 3*gapx + 2*wide && tuile.y == 4*gapy + 3*high){
      tuile.index = 15
      tuile.row = 4
      tuile.col = 3
    }
    if (tuile.x == 4*gapx + 3*wide && tuile.y == 4*gapy + 3*high){
      tuile.index = 16
      tuile.row = 4
      tuile.col = 4
    }
  }

}

const merge = function(){
  for (let i = 0; i < tuiles.length; i++) {
    for (let j = 0; j < tuiles.length; j++) {
    let tuile1 = tuiles[i]
    let tuile2 = tuiles[j]
    // tuile1.y === tuile2.y && tuile1.x === tuile2.x &&
    if(tuile1.y === tuile2.y && i!==j && tuile1.x === tuile2.x && tuile1.indexTranche === tuile2.indexTranche && tuile1.index === tuile2.index) {
      remove(j)
      tuile1.indexTranche = tuile1.indexTranche + 1
    }}
  }}

const replace = function(number){
  if(number == 1){

  }

  if(number == 2){

  }

  if(number == 3){

  }

  if(number == 4){
    h = 0
    order = tuilepos.sort((a, b) => a - b);
    for(let i = 0; i < order.length; i++){
      if(correctOrder.indexOf(order[i]) === -1) {
        correctOrder.push(order[i]);
    }}

    for(let i = order.length -1; i > 0; i--){
      let number = order[i]
      for(let j = 0; j < tuiles.length; j++){
      let tuile = tuiles[j]
        if(tuile.old == number){
          if(h == 0){
            let newY = 4*gapy + 3*high
            tuile.y = newY
            h++
          }
          if(h == 1){
            let newY = 3*gapy + 2*high
            tuile.y = newY
            h++
          }
          if(h == 2){
            let newY = 2*gapy + high
            tuile.y = newY
            h++
          }
          if(h == 3){
            let newY = gapy
            tuile.y = newY
            h++
}}}}}}

const left = function(){
    refresh--
    start++

    for (let i = 0; i < tuiles.length; i++) {
      let tuile = tuiles[i]
        tuile.x = gapx
      }

    spawn()
    generate()
    merge()
}

const right = function(){
  refresh--
  start++

  for (let i = 0; i < tuiles.length; i++) {
    let tuile = tuiles[i]
      tuile.x = 4*gapx + 3*wide
    }

  spawn()
  generate()
  merge()
}

const up = function(){
  refresh--
  start++

  for (let i = 0; i < tuiles.length; i++) {
    let tuile = tuiles[i]
    tuile.y = gapy
  }

  spawn()
  generate()
  merge()
}

const down = function(){
  refresh--
  start++

  for (let i = 0; i < tuiles.length; i++) {
    let tuile = tuiles[i]
      tuile.old = tuile.index
      tuile.y = 4*gapy + 3*high
  }

  spawn()
  generate()
  merge()

  //pas merger - pas complété
  for (let i = 0; i < tuiles.length; i++) {
    for (let j = 0; j < tuiles.length; j++) {
    let tuile1 = tuiles[i]
    let tuile2 = tuiles[j]
    if(tuile1.y === tuile2.y && i!==j && tuile1.x === tuile2.x && tuile1.indexTranche === tuile2.indexTranche && tuile1.index !== tuile2.index){
      // tuilepos.push(tuile1.old)
      // tuilepos.push(tuile2.old)
      // replace(4)
}}}

}
