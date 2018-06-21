class Level {

    protected healthbar : Healthbar
    protected game : Game
    protected animalName : HTMLElement
    protected buttonwrapper : HTMLElement
    protected health : number
    protected gameScore : number = 0
    protected scoreText : HTMLElement
    protected gameScoreElement : HTMLElement
    protected textfield : HTMLElement
    protected text : string = "Hoi daar ben ik weer!"
    protected counter : number = 0
    protected modal : Modal

    constructor(backgroundImage : string, animalName : string, g : Game) {
        this.game = g

        this.healthbar = new Healthbar()

        let background : HTMLElement = document.getElementsByTagName("game")[0] as HTMLElement
        background.style.backgroundImage = `url('./img/backgrounds/${backgroundImage}.png')`

        let forground : Element  = document.getElementsByTagName("forground")[0]
        
        this.modal = new Modal()
        let modalContainer = document.getElementsByClassName("modal-content")[0]
        this.textfield = document.createElement("p")
        modalContainer.appendChild(this.textfield)
        this.textfield.innerHTML = this.text

        let leftwrapper : HTMLElement = document.createElement("leftwrapper")
        forground.appendChild(leftwrapper)
        
        let rightwrapper : HTMLElement = document.createElement("rightwrapper")
        forground.appendChild(rightwrapper)

        this.animalName = document.createElement("animalname")

        this.animalName.innerHTML = animalName
        forground.appendChild(this.animalName)

        new Animal(animalName)

        this.buttonwrapper = document.createElement("buttonwrapper")
        forground.appendChild(this.buttonwrapper)

        this.gameScoreElement = document.createElement("gamescore")
        forground.appendChild(this.gameScoreElement)
        this.scoreText = document.createElement("p")
        this.scoreText.innerHTML = `Score: 0`
        this.gameScoreElement.appendChild(this.scoreText)
        


        this.updateGameScore()

        window.addEventListener("click", (e:Event) => this.changeText())
    }

    protected updateGameScore() : void{
        setTimeout(() => {
            if(this.health > 80){
                this.gameScore += 1
                this.scoreText.innerHTML = `Score: ${this.gameScore}`
                if(this.gameScore === 100){   
                    this.createButton() 
                }
            }
            this.updateGameScore()  
        }, 100)
    }

    protected createButton() : void{
        let button = document.createElement("button")
        button.id = "evolvebutton"
        button.innerHTML = "Evolueer!"
        this.gameScoreElement.appendChild(button)
        button.addEventListener("click", (e:Event) => this.changeLevel());
    }

    protected changeLevel() : void{
        
    }

    public update() : void{

    }

    protected changeText() : void {
    
    }

    protected updateText(text: string){
        this.textfield.innerHTML = text
    }

}
