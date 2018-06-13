/// <reference path="gamelevelobject.ts" />


class Fishlevel extends GameLevelObject{

    constructor(g:Game){
        super()

        this.game = g

        let game : HTMLElement = document.getElementsByTagName("game")[0] as HTMLElement
        game.style.backgroundImage = "url('./img/backgrounds/level2.png')"

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
        this.animalName.innerHTML = "Cephalaspis"
        forground.appendChild(this.animalName)

        new Animal("fish")

        this.buttonwrapper = document.createElement("buttonwrapper")
        forground.appendChild(this.buttonwrapper)
        
        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")

        this.gameScoreElement = document.createElement("gamescore")
        forground.appendChild(this.gameScoreElement)
        this.scoreText = document.createElement("p")
        this.scoreText.innerHTML = `Score: 0`
        this.gameScoreElement.appendChild(this.scoreText)

        this.updateGameScore()

        window.addEventListener("click", (e:Event) => this.changeText());
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
    
    private changeText(){
        this.counter += 1

        switch(this.counter) {
            case 1:
                this.text = "Gefeliciteerd! Je bent geëvolueerd naar een van de oudste vissoorten: de Cephalaspis..."
                break
            case 2:
                this.text = "De Cephalaspis is een kleine gepantserde vis die ongeveer 360 miljoen jaar geleden in het zoete water van Europa, Azië en Noord-Amerika leefde..."
                break
            case 3:         
                this.text = "Vanaf dit level werkt het spel een beetje anders..."
                break
            case 4:
                this.text = "Je moet Cephalaspis zo gezond mogelijk houden door hem te laten rusten wanneer hij moe is en te laten eten wanneer hij honger heeft"
                break
            case 5:
                this.text = "Op de blauwe meter kun je zien hoe moe hij is en op de rode meter zie je hoe hongerig hij is..."
                break
            case 6:
                this.text = "Als hij moe is kun je hem laten slapen met de blauwe knop en als hij honger heeft kun je hem te eten geven met de rode knop..."
                break
            case 7:
                this.text = "De groen-rode meter bovenin laat zien hoe gezond hij is op het moment. Deze meter zal omhoog gaan als hij uitrust of wanner hij eet"
                break
            case 8:
                this.text = "Wanneer deze meter diep in het groen staat gaat je score omhoog!..."
                break
            case 9:
                this.text = "En wanneer je score op honderd is krijg je de keuze om te evolueren naar het volgende dier uit de geschiedenis!"
                break
            case 10:
                this.modal.closeModalByWindow()
                break
        }
        this.updateText(this.text)
    }

    private updateText(text: string){
        this.textfield.innerHTML = text
    }

}