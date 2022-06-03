class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {

    c.fillStyle = this.color
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.lineWidth = 0

    

    c.fill()

    //c.fillRect(this.x, this.y, this.width, this.height)
  }





}
