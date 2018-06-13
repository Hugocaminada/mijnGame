/// <reference path="gamelevelobject.ts" />


class Lizardlevel extends GameLevelObject{

    constructor(g:Game){
        super()

        this.game = g

        let game : HTMLElement = document.getElementsByTagName("game")[0] as HTMLElement
        game.style.backgroundImage = "url('./img/backgrounds/level3.png')"
        
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

        new Animal("Tiktaalik")

        this.animalName = document.createElement("animalname")
        this.animalName.innerHTML = "Tiktaalik"
        forground.appendChild(this.animalName)

        this.buttonwrapper = document.createElement("buttonwrapper")
        forground.appendChild(this.buttonwrapper)
        
        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")
        this.drink = new Buttonbar("drink", "left")


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
        this.game.showScreen(new Mammallevel(this.game))
    }

    public update() {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore) / 3
        this.eat.update()
        this.sleep.update()
        this.drink.update()
        this.healthbar.drawPointer(this.health)
    }



}