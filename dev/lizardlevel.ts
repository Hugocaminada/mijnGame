/// <reference path="fishlevel.ts" />


class Lizardlevel extends Fishlevel{

    protected drink : Buttonbar

    constructor(backgroundImage: string, animalName: string, g:Game){
        super(backgroundImage, animalName, g)

        this.drink = new Buttonbar("drink", "left")

    }

    protected changeLevel() : void{
        this.game.emptyScreen()
        this.game.showScreen(new Mammallevel("level4", "Thrinaxodon", this.game))
    }

    public update() : void{
        this.health = (this.eat.getScore + this.sleep.getScore + this.drink.getScore) / 3
        this.eat.update()
        this.sleep.update()
        this.drink.update()
        this.healthbar.drawPointer(this.health)
    }

    protected changeText() : void{
        this.counter += 1

        switch(this.counter) {
            case 1:
                this.text = "hoiiiii"
                break
            case 2:
                this.modal.closeModalByWindow()
                break
        }
        this.updateText(this.text)
    }

}