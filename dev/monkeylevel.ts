/// <reference path="mammallevel.ts" />


class Monkeylevel extends Mammallevel{

    protected play : Buttonbar

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.play = new Buttonbar("play", "left")

    }

    protected changeLevel() : void{
            this.game.emptyScreen()
            this.game.showScreen(new Humanlevel("level6", "Mens", this.game))
    }

    public update() : void{
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore + this.play.getScore) / 5
        this.eat.update()
        this.sleep.update()
        this.drink.update()
        this.exercise.update()
        this.play.update()
        
        this.healthbar.drawPointer(this.health)
    }

    protected changeText() : void{
        this.counter += 1

        switch(this.counter) {
            case 1:
                this.modal.closeModalByWindow()
                break
        }
        this.updateText(this.text)
    }

}