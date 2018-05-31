class Ball {

    htmlElement : HTMLElement
    x : number 
    y : number

    speedX : number
    speedY : number

    constructor() {
        
        this.htmlElement = document.createElement("ball")
        document.body.appendChild(this.htmlElement)

        this.x = 0
        this.y = 0

        this.speedX = Math.random() * 5 + 5
        this.speedY = Math.random() * 5 + 5

    }

    move(): void {

        this.x += this.speedX
        this.y += this.speedY

        if(this.x + this.htmlElement.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX *= -1
        }

        if(this.y + this.htmlElement.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY *= -1
        }

        this.draw()
    }

    draw(): void {

        this.htmlElement.style.transform = "translate("+this.x+"px, "+this.y+"px)"

    }
}