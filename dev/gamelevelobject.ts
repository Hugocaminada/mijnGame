class GameLevelObject {

    protected healthbar : Healthbar
    protected game : Game
    protected animalName : HTMLElement
    protected buttonwrapper : HTMLElement
    protected eat : Buttonbar
    protected sleep : Buttonbar
    protected health : number
    protected drink : Buttonbar
    protected exercise : Buttonbar
    protected play : Buttonbar
    protected learn : Buttonbar
    protected gameScore : number = 0
    protected scoreText : HTMLElement
    protected gameScoreElement : HTMLElement
    protected textfield : HTMLElement
    protected text : string = "Hoi daar ben ik weer!"
    protected counter : number = 0
    protected modal : Modal

    constructor() {
        
        this.healthbar = new Healthbar()
        
    }

}
