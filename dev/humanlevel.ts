/// <reference path="monkeylevel.ts" />


class Humanlevel extends Monkeylevel{

    protected learn : Buttonbar

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.learn = new Buttonbar("learn", "right")

        this.updateGameScore()
    }

    protected updateGameScore(){
        setTimeout(() => {
            if(this.health > 80){
                this.gameScore += 1
                this.scoreText.innerHTML = `Score: ${this.gameScore}`
            }
            this.updateGameScore()  
        }, 100)
    }

    protected createButton(){

    }

    public update() {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore + this.play.getScore + this.learn.getScore) / 6
        this.eat.update()
        this.sleep.update()
        this.drink.update()
        this.exercise.update()
        this.play.update()
        this.learn.update()

        this.healthbar.drawPointer(this.health)
    }

    protected changeText(){

        this.modal.closeModalByWindow()

    }

}