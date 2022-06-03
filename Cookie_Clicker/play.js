"use strict"


var nbclick = 0 //total number of clicks
var dollars = 0 //amount of money currently owned
var shopvalue = 0 //open/close shop
var statsvalue = 0 //open/close stats
var settingsvalue = 0  //open/close settings
var totaldollars = 0 //total amount of money throught the game
var clickamount = 1 //amount of $ per clicks
var buyclickcost = 100 //cost to upgrade amount of cookies per click
var skins = [] //all cookie skins the player has bought
var previous_skin = 0 //previous skin number (to know which button to change the text)
var temp = "" // used to set the html code dollars
var cps = 0 //automated cookies per second
var upgrades_cost = [100, 1000, 10000, 100000, 1000000, 10000000]



const montrer = function() {

  var yourImg = document.getElementById("cookie");
  yourImg.style.height = '250px';
  yourImg.style.width = '250px';
  yourImg.style.margin = '20px 0px 30px 0px';

  setTimeout(function(){ yourImg.style.height = '300px'; yourImg.style.width = '300px'; yourImg.style.margin = '0px';}, 200);

  totaldollars++
  nbclick++
  dollars = dollars + clickamount



  //stats section
  document.getElementById("totalclicks").innerHTML = nbclick
  document.getElementById("totaldollars").innerHTML = totaldollars

}

//Shop
  const openshop = function() {
    if (shopvalue === 0) {
      document.getElementById("shophub").style.display = "block";
      shopvalue = 1
    }
    else if (shopvalue === 1) {
      document.getElementById("shophub").style.display = "none";
      shopvalue = 0
    }
  }

const buy = function(x) {
  if (dollars >= upgrades_cost[x]) {
    if (x === 0) {cps = cps + 0.3}
    else if(x === 1) {cps = cps + 0.5}
    else if(x === 2) {cps = cps + 1}
    else if(x === 3) {cps = cps + 2}
    else if(x === 4) {cps = cps + 5}
    else if(x === 5) {cps = cps + 10}

    dollars = dollars - upgrades_cost[x]
    upgrades_cost[x] = upgrades_cost[x]* 3.1
    var id = "upgrade" + x.toString()
    document.getElementById(id).innerHTML = upgrades_cost[x] + "$"
  }
}


  const buyclick = function() {
    if (dollars > buyclickcost || dollars === buyclickcost) {
      clickamount = clickamount * 2
      dollars = dollars - buyclickcost
      buyclickcost = buyclickcost * 4
      var temp = buyclickcost + "&nbsp" + "$"
      document.getElementById("clickamount").innerHTML = temp
    }
    else {return}
  }






const openstats = function() {
  if (statsvalue === 0) {
    document.getElementById("statshub").style.display = "block";
    statsvalue = 1

  }
  else if (statsvalue === 1) {
    document.getElementById("statshub").style.display = "none";
    statsvalue = 0
  }
}



const opensettings = function() {
  if (settingsvalue === 0) {
    document.getElementById("settingshub").style.display = "block";
    settingsvalue = 1
  }
  else if (settingsvalue === 1) {
    document.getElementById("settingshub").style.display = "none";
    settingsvalue = 0
  }
}

const color = function(x) {
  if(x === 0) {document.body.style.backgroundColor = "lightgrey"}
  if(x === 1) {document.body.style.backgroundColor = "lightblue"}
  if(x === 2) {document.body.style.backgroundColor = "lightyellow"}
}

const changeskin = function(x) {
  console.log(previous_skin, x)
if (x != previous_skin) {
  if (skins.includes(x)) {
    var skin_id = "skin" + x.toString()
    document.getElementById(skin_id).innerHTML = "Selected"
    document.getElementById("cookie").src = "images/" + skin_id + ".png"
    var old_skin_id = "skin" + previous_skin.toString()
    document.getElementById(old_skin_id).innerHTML = "Select"
    previous_skin = x

  }
  else {buyskin(x)}
  }
}

const buyskin = function(x) {
if (dollars > x*1000) {
  dollars = dollars - (1000 * x)
  skins.push(x)
  var skin_id = "skin" + x.toString()
  document.getElementById(skin_id).innerHTML = "Selected"
  document.getElementById("cookie").src = "images/" + skin_id + ".png"
  skin_id = "skin" + previous_skin.toString()
  document.getElementById(skin_id).innerHTML = "Select"
    previous_skin = x
  }
}

const animation = function() {
  requestAnimationFrame(animation)

  dollars =  Math.round(dollars*100) / 100
  totaldollars =  Math.round(totaldollars*100) / 100


  temp = "Dollars: " + dollars
  document.getElementById("dollars").innerHTML = temp
  document.getElementById("totaldollars").innerHTML = totaldollars
}


const auDemarrage = function() {
  document.getElementById("shophub").style.display = "none";
  document.getElementById("statshub").style.display = "none";
  document.getElementById("settingshub").style.display = "none";
  animation()
  setInterval(function () {dollars = dollars + cps; totaldollars = totaldollars + cps}, 1000);
}

window.onload = auDemarrage
