class Humanlevel {

    private game : Game
    private healthbar : Healthbar 
    private animalName : HTMLElement
    private buttonwrapper : HTMLElement
    private eat : Buttonbar
    private sleep : Buttonbar
    private drink : Buttonbar
    private exercise : Buttonbar
    private play : Buttonbar
    private learn : Buttonbar
    private animal : Animal
    private health : number

    constructor(g:Game){

        this.game = g

        this.healthbar = new Healthbar()
        
        let forground : Element  = document.getElementsByTagName("forground")[0]
        let leftwrapper : HTMLElement = document.createElement("leftwrapper")
        forground.appendChild(leftwrapper)
        
        let rightwrapper : HTMLElement = document.createElement("rightwrapper")
        forground.appendChild(rightwrapper)

        this.animal = new Animal("darwin")

        this.animalName = document.createElement("animalname")
        this.animalName.innerHTML = "Homo Sapien"
        forground.appendChild(this.animalName)

        this.buttonwrapper = document.createElement("buttonwrapper")
        forground.appendChild(this.buttonwrapper)
        
        
        this.sleep = new Buttonbar("sleep", "left")
        this.eat = new Buttonbar("eat", "right")
        this.drink = new Buttonbar("drink", "left")
        this.exercise = new Buttonbar("exercise", "right") 
        this.play = new Buttonbar("play", "left")
        this.learn = new Buttonbar("learn", "right")

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



}