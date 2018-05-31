class Square {

    htmlElement : HTMLElement
    x : number 
    y : number

    constructor(x: number, y: number) {
        
        this.htmlElement = document.createElement("square")
        document.body.appendChild(this.htmlElement)

        this.x = x
        this.y = y

        this.draw()

    }

    draw(): void {

        this.htmlElement.style.transform = "translate("+this.x+"px, "+this.y+"px)"

    }
}