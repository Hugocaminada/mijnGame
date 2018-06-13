class Buttonbar {

    private bar:HTMLElement
    private button:HTMLElement
    private img: HTMLImageElement
    private pointer: HTMLElement

    private pointerWidth: number 
    private score: number = 50
    private buttonCounter : number = 0

    public get getScore(): number {
		return this.score;
	}

    constructor(name:string, position:string){

        this.bar = document.createElement("bar")
        this.bar.id = name+"bar"
        let wrapper = document.getElementsByTagName(`${position}wrapper`)[0]
        wrapper.appendChild(this.bar)

        this.pointer = document.createElement("pointer")
        this.bar.appendChild(this.pointer)
        this.pointer.id = name+"pointer"

        this.button = document.createElement("button")
        this.button.id = name+"button"
        let buttonwrapper = document.getElementsByTagName("buttonwrapper")[0]
        buttonwrapper.appendChild(this.button)

        this.img = document.createElement("img")
        this.img.src = "img/icons/"+name+".png"
        this.button.appendChild(this.img)

        this.button.addEventListener("click", (e:Event) => this.buttonClickChecker());

        this.lowerScore()
    }

    public update(){
        this.checkButtonOpacity()
        this.drawPointer()
    }
    
    private buttonClickChecker(){
        
        if (this.buttonCounter < 3){
            this.buttonCounter += 1
            this.movePointer()
        } 
        this.checkButtonCounter()
    }

    private checkButtonCounter(){
        if (this.buttonCounter == 3){
            setTimeout(() => {
                this.buttonCounter = 0
            }, 5000)
        }
    }

    private movePointer(){
        if(this.score < 100){
            this.score += 5
        }
    }

    private lowerScore(){
        setTimeout(() => {
            if(this.score > 0){
                this.score -= 1
            }
            this.lowerScore()  
        }, Math.random() * 10000 + 7000)
    }

    private drawPointer(){
        this.pointerWidth = this.score * 1
        this.pointer.style.width = this.pointerWidth+"%";
        if(this.score >= 100){
            this.score = 100
        }
    }

    private checkButtonOpacity(){
        if(this.score >= 100 || this.buttonCounter == 3){
            this.button.style.opacity = "0.5";
        }
        else{
            this.button.style.opacity = "unset"
        }
    }
}

