const entierAleatoire = function(max){
//done un nombre plus petit que 1 random
  var t1 = Math.random()
  //on a fait x10
  var t2 = t1 * max
  //on a pris l'unite
  var entier = Math.floor(t2)

  return entier
}
const choix = function(choix){
counter++
  if(choice==1){
    if(choix == 1){ us = true
    text = "Congrats! You now live in the United States of America"}
    if(choix ==2){canada = true
    text = "Congrats! You now live in Canada"}
   }
  if(choice==2){
    if(choix == 1){temp = entierAleatoire(10)
      subs = subs+temp
    text = "Your friends laughed at you and then subscribed to you"}
    if(choix ==2){temp = entierAleatoire(4)+1
      temp = temp*subMod
      subs = subs+ temp
      text = "Your siblings laughed at you then showed your parents how to subscribe"
    }
   }
  if(choice==3){
    if(choix == 1){
      temp = entierAleatoire(5)
        temp = temp*subMod
    subs = subs +temp
text = "Some people accidently followed you, they will probably regret it later"
  }
    if(choix ==2){
       temp = entierAleatoire(10)
        temp = temp*subMod
      subs = subs+temp
    temp2 = entierAleatoire(2)
    text = "Some people subbed to see you break your ankle"
    if(temp2>1){
    injury(2)}}
   }
  if(choice==4){
    if(choix == 1){temp = entierAleatoire(1000)
        temp = temp*subMod
    subs = subs+temp
  text = "Your video went viral and fellow Ukrainian sympathisers followed"}
    if(choix ==2){temp = entierAleatoire(10000)
    money = money+temp
  text = "The Russian gouvernement sent you money for spreading propaganda"}
   }
  if(choice==5){
    if(choix == 1){temp= entierAleatoire(1000)
        temp = temp*subMod
    subs = temp +subs
  text = "People felt bad that you starved yourself on live, so they followed you"}
    if(choix ==2){ temp = entierAleatoire(700)
    temp5 = temp
    job = true
    if(temp5 > 500){
        text = "You found a decent job surprisingly"
    }
    if(temp5<500){
  text = "You now work at McDonalds, very fitting of your talents"}}
   }
  if(choice==6){
    if(choix == 1){ temp = entierAleatoire(1)
    //if(temp==0){
       temp = entierAleatoire(100)
       temp = temp*subMod
      subs = subs - temp
    //}
    text = "Your followers were weirded out by you and unfollowed L"}
    else{
      temp = entierAleatoire(100)
        temp = temp*subMod
      subs = subs + temp
      text = "Some weird people enjoyed seeing you fake cry so they followed"
    }
    if(choix ==2){
     temp = entierAleatoire(10)
       temp = temp*subMod
     subs = subs + temp
     text = "Some weird people enjoyed seeing you fake cry so they followed "
    }
   }
  if(choice==7){
    if(choix == 1){ temp = entierAleatoire(2)
      if(temp==0){
        temp = entierAleatoire(500)
        temp = temp*-1
        money = temp + money
        text = "Your teeth are dead so she fixed them"
      }
    else{text = "Your teeth are all good!"
    }
    }
    if(choix ==2){
        temp = entierAleatoire(5)
        text = "You got checked up and you're all good"
        if(temp===0){
           injury(1)
         }
      }


   }
  if(choice==8){
    if(choix == 1){ temp = entierAleatoire(10)
      temp = subMod*temp
      if(temp >1){
        text = "You successfully collabed and you got a surge of new followers"
        temp = entierAleatoire(1000)
          temp = temp*subMod
        subs = temp + subs
      }
    else{
    text = "They ingored you hah rip"
    }
    }
    if(choix ==2){
      temp = entierAleatoire(1)
      if(temp == 0){
        temp = entierAleatoire(100)
          temp = temp*subMod
        subs = temp+subs
        text = "You successfully collabbed congrats!"
      }
    else{
      text = "Rip they ignored you"
    }
    }
   }
  if(choice==9){
    if(choix == 1){
      temp = entierAleatoire(100)+10
        temp = temp*subMod
      subs = temp + subs
      text = "The dog lovers have your back"
    }
    if(choix ==2){
      temp = entierAleatoire(150)
        temp = temp*subMod
      subs = temp + subs
      text = "Cat lovers followed"
    }
   }
  if(choice==10){
    if(choix == 1){
    temp = 1000
    money = money - temp
    temp = entierAleatoire(1000)
      temp = temp*subMod
    subs = subs +temp
    text = "You payed 1k for your ad to annoy someone"
    }
    if(choix ==2){
    temp = 100
    subs = temp + subs
    money = money - temp
    text = "Surprisingly it worked! 100$ for 100 followers is not bad at all!"
    temp = entierAleatoire(4)
    if(temp == 0){
      cancelled = true
    }
    }
   }
   //changer l'image
if(choice ==1){
  choice =2
}
else if(choice == 2){
  choice = 4
}
else if(choice == 4){
  choice = 5
}
else{

let index =entierAleatoire(options.length)
choice = options[index]
}
for(let i=0;i<idees.length;i++){
  let idee = idees[i]
  idee.uwu = choice
}

}
const animer= function(){
  if(gameover == false){
  requestAnimationFrame(animer)
  c.clearRect(0,0,canvas.width, canvas.height)
  for(let i=0;i<idees.length;i++){
    let idee = idees[i]
    idee.dessiner()
}
   influencer.dessiner()
  document.getElementById("subs").innerHTML = subs
  subs = parseInt(subs)
  document.getElementById("money").innerHTML = money
  document.getElementById("text").innerHTML = text
tik++
temp3 = counter/tik*90000
if(temp3> 500){
  gameover = true
}
if(temp3 < 200){
  speed = 1
}



//modifiers
temp =  subs/800
subMod = Math.floor(temp)
if(subMod <= 0){
  subMod = 1
}
if(money < -1500){
  dept = true
}
if(subs> 10000){
  win = true
}
if(subs<0){
  cancelled = true
}
}
console.log(subMod)
if(gameover==true){
text = "Game Over, No spamming allowed"
  document.getElementById("text").innerHTML = text
}
if(win==true){
text = "You are officially an Influencer Congrats!"
  document.getElementById("text").innerHTML = text
}
if(dept==true){
text = "Game Over!You are in too much dept"
  document.getElementById("text").innerHTML = text
}
if(cancelled==true){
text = "Game Over!You got cancelled"
  document.getElementById("text").innerHTML = text
}

}
const injury = function(a){
  console.log("uwu")
  uwu = entierAleatoire(10000)
  console.log(uwu)
  uwu = uwu+500
  console.log(uwu)
  if(canada == true){
    uwu = 0
    text = "You discover you have nose cancer,Chemo cost a LOT,but you live in Canada, so not anymore!"}
  if(a ==1){
  text = "You discover you have nose cancer,Chemo cost a LOT"}
  if(a ==2){
  text = "You broke your ankle it cost a lot!"}
  uwu = 0-uwu
  console.log(uwu)
  temp = money + uwu
  money = temp
console.log(money)
}
const calculateMoney = function(){
  if(gameover === true){return}
  if(win === true){return}
  if(cancelled === true){return}
  if(dept === true){return}
  else{
  temp = subs/100
    temp = Math.floor(temp)

  if(job ==true){
    temp = temp5+temp
  }
  if( canada == true){
  temp2 = temp *0.70
  temp2 =  Math.floor(temp2)
  temp = temp - temp2
}
  money = temp + money
}
}
var canvas = document.getElementById("canvas1")
canvas.width = window.innerWidth*0.6
canvas.height = window.innerHeight*0.6
var c = canvas.getContext("2d")
var idees = []
var temp2 = 0
var temp3 = 0
var imgNuage = document.getElementById("cloud1")
var spriteNuage = new Sprite(imgNuage, 803, 301, 5,2)
var choice = 1
var options= [3,6,7,8,9,10]
var canada = false
var us = false
var temp = 0
var subs = 0
var money = 0
var subMod = 1
var text = ""
var counter = 0
var speed = 1
var tik = 0
var temp3 =0
var avertissement = false
var gameover = false
var job = false
var temp5 =1
var dept = false
var win = false
var uwu = 0
var cancelled = false
idees.push( new Choix(spriteNuage,250,15,200,150, choice ))
imgNuage = document.getElementById("cloud2")
spriteNuage = new Sprite(imgNuage, 808, 309, 5,2)
idees.push( new Choix(spriteNuage,460,15,200,150, choice ))
var influencerImg = document.getElementById("girl")
var influencer = new Influencer(influencerImg, 390, 190, 150, 200)
animer()

setInterval( function(){ calculateMoney()}
, 1000)
text = "Welcome to InfluencerSimulator where your goal is to become famous without going in too much dept"
