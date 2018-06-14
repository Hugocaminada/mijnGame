/// <reference path="lizardlevel.ts" />


class Mammallevel extends Lizardlevel{

    protected exercise : Buttonbar

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.exercise = new Buttonbar("exercise", "right") 

    }

    protected changeLevel(){
            this.game.emptyScreen()
            this.game.showScreen(new Monkeylevel("level5", "Procunsul", this.game))
    }

    public update() {
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore + this.exercise.getScore) / 4
        this.eat.update()
        this.sleep.update()
        this.drink.update()
        this.exercise.update()
        this.healthbar.drawPointer(this.health)
    }

    protected changeText(){
        this.counter += 1

        switch(this.counter) {
            case 1:
                this.modal.closeModalByWindow()
                break
        }
        this.updateText(this.text)
    }

}