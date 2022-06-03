"use strict"

//Global Variable
var player_color = "blue"

var start_game = 0
var dx = 0
var dy = 0
var mouseX = 0
var mouseY = 0
var gamemode = ""
var menu = document.getElementById("menu")
var main = document.getElementById("main")
var blue = document.getElementById("blue")
var green = document.getElementById("green")
var red = document.getElementById("red")
var player_name = "player"
var starting_position = []
var positionX = 0
var positionY = 0
var sectionsX = []
var sectionsY = []
var sectionX = 0
var sectionY = 0
var boulesX_splice = []
var boules2X_splice = []
var boulesY_splice = []
var boules2Y_splice = []
var player_radius = 20


var canvas = document.getElementById("canvas")

//on start
menu.style.display = "block"
main.style.display = "none"

if (canvas.width > canvas.height) {
  canvas.width = window.innerHeight
  canvas.height = window.innerHeight
}

else {
  canvas.width = window.innerWidth
  canvas.height = window.innerWidth
}

  var c_w = canvas.width
  var c_h = canvas.height
  var c = canvas.getContext("2d")
  var player = new Player(c_w/2, c_h/2, 20, "blue")

//starting position

  for (let i = 0; i < 2; i++) {
    var entier = Math.floor(Math.random()*(((c_w*5)-(c_w/2))-(c_w/2)+1)+(c_w/2));
    starting_position.push(entier)
}

  positionX = starting_position[0]
  positionY = starting_position[1]

  const boule_couleur = function() {

  var t1 = Math.random()
  var t2 = t1 * 5
  var entier = Math.floor(t2)

  if (entier === 0) {return "blue"}
  else if (entier === 1 ) {return "red"}
  else if (entier === 2) {return "green"}
  else if (entier === 3) {return "yellow"}
  else if (entier === 4) {return "orange"}
}

const boule_grosseur = function() {
   return Math.floor(Math.random()*(8-5+1)+5);
}

const boules = function(x, y) {
  var temp = []

  for (let i = 0; i < 100; i++) {
    var entier1 = Math.floor(c_w*(Math.random()+(x-1)));

    var entier2 = Math.floor(c_w*(Math.random()+(y-1)));

    var couleur = boule_couleur()

    var grosseur = boule_grosseur()

    var coordonnees = entier1 + "_" + entier2 + "_" + couleur + "_" + grosseur

    temp.push(coordonnees)
  }
  return temp
}


//sections dans map
//sections rangee 1
var boules0_0  = boules(1,1); var boules1_0  = boules(2,1); var boules2_0  = boules(3,1); var boules3_0  = boules(4,1); var boules4_0  = boules(5,1)
var boules0_1  = boules(1,2); var boules1_1  = boules(2,2); var boules2_1  = boules(3,2); var boules3_1  = boules(4,2); var boules4_1  = boules(5,2)
var boules0_2  = boules(1,3); var boules1_2  = boules(2,3); var boules2_2  = boules(3,3); var boules3_2  = boules(4,3); var boules4_2  = boules(5,3)
var boules0_3  = boules(1,4); var boules1_3  = boules(2,4); var boules2_3  = boules(3,4); var boules3_3  = boules(4,4); var boules4_3  = boules(5,4)
var boules0_4  = boules(1,5); var boules1_4  = boules(2,5); var boules2_4  = boules(3,5); var boules3_4  = boules(4,5); var boules4_4  = boules(5,5)


const ennemis_spawn = function(z) {
  var temp = []
  for (let i = 0; i < z; i++) {
    var x = Math.floor(Math.random()*c_w*5);
    var y = Math.floor(Math.random()*c_w*5);
    var ennemi_color = boule_couleur();
    var ennemi_radius = Math.floor(Math.random()*(50-15+1)+15)
    var ennemi = x + "_" + y + "_" + ennemi_color + "_" + ennemi_radius
    temp.push(ennemi)
    console.log(temp)
  }
  return temp
}

//NOMBRE ENNEMIS
var ennemis = ennemis_spawn(10)
 //console.log(positionX, positionY)
 //console.log(c_w, c_h)

//if space bar is pressed
  document.addEventListener('keydown', function(event) {
   if (event.code === 'Space' && start_game === 1) {
     c.font = ("20px Arial")
     c.fillStyle = ("black")
     animation()
     document.getElementById("header").style.display = "none"
     document.getElementById("footer").style.display = "none"
   }
  })

  //fonctions du menu

  const mode = function(x) {
    if (x === 0) {gamemode = "seul"}
    if (x === 1) {gamemode = "équipe"}
  }


   const color = function(x) {
     if (x === 0) {
      player_color = "blue"
      blue.style.borderColor = "black"
      green.style.borderColor = "lightgrey"
      red.style.borderColor = "lightgrey"
     }
     if (x === 1) {
      player_color = "green"
      green.style.borderColor = "black"
      blue.style.borderColor = "lightgrey"
      red.style.borderColor = "lightgrey"
    }
     if (x === 2) {
       player_color = "red"
       red.style.borderColor = "black"
       green.style.borderColor = "lightgrey"
       blue.style.borderColor = "lightgrey"
   }


     player = new Player(c_w/2, c_h/2, 20, player_color)
   }

    const start = function() {
      player_name = document.getElementById("name").value
    //  console.log(document.getElementById("name").value)
      menu.style.display = "none"
      main.style.display = "block"

      start_game = 1

      c.font = ("20px Arial")
      c.fillStyle = ("black")
      //c.fillText(player_name, (c_w/2) - ((c.measureText(player_name).width)/2), c_h/2 + 35)
    //  console.log(player_name)
    }


    // size: c_w x 10 / c_h x 10


    //const dessiner_boules = function() {
      //for (let i = 0) {

      //}

    //}/

    const boules_dessiner = function() {

      if (positionX <= ((c_w/2) + 1)) {positionX = (c_w/2) +1}
      if (positionX >= (c_w*5) - (c_w/2)) {positionX = (c_w*5) - (c_w/2)}
      if (positionY <= ((c_h/2) + 1)) {positionY = (c_h/2) + 2}
      if (positionY >= (c_h*5) - (c_h/2)) {positionY = (c_h*5) - (c_h/2)}

      var sectionX = Math.floor((positionX / c_w )-0.5)
      var section2X = sectionX + 1
      var sectionY = Math.floor((positionY / c_w)-0.5)
      var section2Y = sectionY + 1
    //  console.log(sectionX, section2X, sectionY, section2Y)


      var boulesX = eval("boules" + sectionX +"_" + sectionY)
      if (positionX + (c_w/2) + 2 <= c_w*4) {var boules2X = eval("boules" + section2X +"_" + sectionY)}
      if (positionY + (c_h/2) + 2 <= c_h*4) {var boulesY = eval("boules" + sectionX +"_" + section2Y)}
      if ((positionY + (c_h/2) + 2 <= c_h*4 ) && ((positionX + (c_h/2)) <= (positionY + (c_h/2) + 2 <= c_h*4 ))) {var boules2Y = eval("boules" + section2X +"_" + section2Y)}
      console.log(sectionX, sectionY)


      for (let i = 0; i < boulesX.length; i++) {
        var boules = boulesX[i].split("_")
        var x = (c_w/2) + (boules[0] - positionX)
        var y = Number((c_h/2) + (boules[1] - positionY))
        var couleur_boule_precis = boules[2]
        var radius = Number(boules[3])
        if ((x - (radius/2) > player.x - (player_radius/2)) && (x + (radius/2) < player.x + (player_radius/2))
        && (y - (radius/2) > player.y - (player_radius/2)) && (y + (radius/2) < player.y + (player_radius/2))) {
          boulesX_splice.push(i)
          player_radius = player_radius + radius/10
      }
        else {
          var tmp = new Boule(x, y, couleur_boule_precis, radius)
          tmp.dessiner_boules()
        }
    }

    for(let i = 0; i < boulesX_splice.length; i++) {
      boulesX.splice(boulesX_splice[i], 1)
    }
      boulesX_splice = []


  if (positionX + (c_w/2) + 2 <= c_w*4) {
    for (let i = 0; i < boules2X.length; i++) {
      var boules = boules2X[i].split("_")
      var x = (c_w/2) + (boules[0] - positionX)
      var y = Number((c_h/2) + (boules[1] - positionY))
      var couleur_boule_precis = boules[2]
      var radius = Number(boules[3])
      if ((x - (radius/2) > player.x - (player_radius/2)) && (x + (radius/2) < player.x + (player_radius/2))
      && (y - (radius/2) > player.y - (player_radius/2)) && (y + (radius/2) < player.y + (player_radius/2))) {
        boules2X_splice.push(i)
        player_radius = player_radius + radius/10
    }
      else {
        var tmp = new Boule(x, y, couleur_boule_precis, radius)
      //  console.log(tmp)
        tmp.dessiner_boules()
      }
  }
  for(let i = 0; i < boules2X_splice.length; i++) {
    boules2X.splice(boules2X_splice[i], 1)
  }
    boules2X_splice = []
}

  if (positionY + (c_h/2) + 2 <= c_h*4) {
    for (let i = 0; i < boulesY.length; i++) {
      var boules = boulesY[i].split("_")
      var x = (c_w/2) + (boules[0] - positionX)
      var y = Number((c_h/2) + (boules[1] - positionY))
      var couleur_boule_precis = boules[2]
      var radius = Number(boules[3])
      if ((x - (radius/2) > player.x - (player_radius/2)) && (x + (radius/2) < player.x + (player_radius/2))
      && (y - (radius/2) > player.y - (player_radius/2)) && (y + (radius/2) < player.y + (player_radius/2))) {
        boulesY_splice.push(i)
        player_radius = player_radius + radius/10
      }

      else {
        var tmp = new Boule(x, y, couleur_boule_precis, radius)
        tmp.dessiner_boules()
      }
  }
  for(let i = 0; i < boulesY_splice.length; i++) {
    boulesY.splice(boulesY_splice[i], 1)
  }
    boulesY_splice = []
}
    if ((positionY + (c_h/2) + 2 <= c_h*4 ) && ((positionX + (c_h/2)) <= (positionY + (c_h/2) + 2 <= c_h*4 )))  {
    for (let i = 0; i < boules2Y.length; i++) {
      var boules = boules2Y[i].split("_")
      var x = (c_w/2) + (boules[0] - positionX)
      var y = Number((c_h/2) + (boules[1] - positionY))
      var couleur_boule_precis = boules[2]
      var radius = Number(boules[3])
      if ((x - (radius/2) > player.x - (player_radius/2)) && (x + (radius/2) < player.x + (player_radius/2))
      && (y - (radius/2) > player.y - (player_radius/2)) && (y + (radius/2) < player.y + (player_radius/2))) {
      boules2Y_splice.push(i)
      player_radius = player_radius + radius/10
      }
      else {
        var tmp = new Boule(x, y, couleur_boule_precis, radius)
        tmp.dessiner_boules()
      }
  }
  for(let i = 0; i < boules2Y_splice.length; i++) {
    boules2Y.splice(boules2Y_splice[i], 1)
  }
  boules2Y_splice = []
    }
    console.log(player.radius, player_radius)
  }

  const ennemis_dessiner = function() {
    for (let i = 0; i < ennemis.length; i++) {
      var ennemi = ennemis[i].split("_")
      var x = (c_w/2) + (ennemi[0] - positionX)
      var y = Number((c_h/2) + (ennemi[1] - positionY))
      var ennemi_color = ennemi[2]
      var ennemi_radius = ennemi[3]
      var new_ennemi = new Ennemi(x, y, ennemi_color, ennemi_radius)
      new_ennemi.dessiner_ennemi()
    }
  }

  const ennemis_bouger = function() {
    for (let i = 0; i < ennemis.length; i++) {
      var ennemi = ennemis[i].split("_")
      var x = ennemi[0]
      var y = ennemi[1]
    }
  }


   //animer
   const animation = function() {
     requestAnimationFrame(animation)
     c.clearRect(0,0,c_w, c_h)

     boules_dessiner()
     ennemis_dessiner()

     player.draw()

     c.fillStyle = ("black")
     c.fillText(player_name, (c_w/2) - ((c.measureText(player_name).width)/2), c_h/2 + 35)

     onmousemove = function(e){mouseX = e.clientX; mouseY = e.clientY}

     dx = (mouseX - (window.innerWidth/2)) / 100
     dy = (mouseY - (window.innerHeight/2)) / 100

     positionX = positionX + dx
     positionY = positionY + dy

     player.radius = player_radius
     //console.log(player.radius)


     console.log(positionX, positionY)

    //c.fillText(player_name, (c_w/2) - (c.measureText(player_name)).width/2, c_h/2)

   }
