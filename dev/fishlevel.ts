class Fishlevel {

    private game : Game
    private healthbar : Healthbar 
    private animalName : HTMLElement
    private buttonwrapper : HTMLElement
    private eat : Buttonbar
    private sleep : Buttonbar
    private drink : Buttonbar
    private animal : Animal
    private health : number
    private gameScore : number = 0
    private scoreText : HTMLElement
    private gameScoreElement : HTMLElement

    constructor(g:Game){

        this.game = g

        this.healthbar = new Healthbar()
        
        let forground : Element  = document.getElementsByTagName("forground")[0]
        let leftwrapper : HTMLElement = document.createElement("leftwrapper")
        forground.appendChild(leftwrapper)
        
        let rightwrapper : HTMLElement = document.createElement("rightwrapper")
        forground.appendChild(rightwrapper)
    
        this.gameScoreElement = document.createElement("gamescore")
        forground.appendChild(this.gameScoreElement)
        this.scoreText = document.createElement("p")
        this.scoreText.innerHTML = `Score: 0`
        this.gameScoreElement.appendChild(this.scoreText)

        this.animal = new Animal("fish")

        this.animalName = document.createElement("animalname")
        this.animalName.innerHTML = "Cephalaspis"
        forground.appendChild(this.animalName)

        this.buttonwrapper = document.createElement("buttonwrapper")
        forground.appendChild(this.buttonwrapper)
        
        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")

        this.updateGameScore()
    }

    private updateGameScore(){
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

    private createButton(){
        let button = document.createElement("button")
        button.id = "evolvebutton"
        button.innerHTML = "Evolueer!"
        this.gameScoreElement.appendChild(button)
        button.addEventListener("click", (e:Event) => this.changeLevel());
    }

    private changeLevel(){
            this.game.emptyScreen()
            this.game.showScreen(new Lizardlevel(this.game))
    }

    public update() {
        this.health = (this.eat.getScore + this.sleep.getScore) / 2
        this.eat.update()
        this.sleep.update()
        this.healthbar.drawPointer(this.health)
    }

}