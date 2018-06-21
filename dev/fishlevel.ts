/// <reference path="level.ts" />

class Fishlevel extends Level{

    protected sleep : Buttonbar
    protected eat : Buttonbar

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")
    }

    protected changeLevel() : void {
        this.game.emptyScreen()
        this.game.showScreen(new Lizardlevel("level3", "Tiktaalik", this.game))
    }

    public update() : void{
        this.health = (this.eat.getScore + this.sleep.getScore) / 2
        this.eat.update()
        this.sleep.update()
        this.healthbar.drawPointer(this.health)
    }
    
    protected changeText() : void{
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
        console.log(this.counter)
    }

}