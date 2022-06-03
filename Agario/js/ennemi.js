class Ennemi {
  constructor(x, y, couleur, radius) {

  this.x = x
  this.y = y
  this.color = couleur
  this.radius = radius
  }

  deplacer(x, y) {

    this.x = this.x - dx
    }

  dessiner_ennemi() {
      //console.log(this.x, this.y, this.color, this.radius)
      c.fillStyle = this.color
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.lineWidth = 0

      c.fill()
    }
  }
