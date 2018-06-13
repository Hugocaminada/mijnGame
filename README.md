# EVOLIFE
Deze game heb ik gemaakt voor CLE4.
Aangezien ik alle typescript heb geschreven voor deze levels, dien ik deze levels ook in voor mijn Programmeer opdracht. 

Ik heb veel verschillende Classes toegevoegd.
Ik heb bijvoorbeeld de class 'Buttonbar' bedacht voor alle buttons en hun corresponderende progress bars. Deze roep ik per level meerdere keren aan met verschillende waardes.

    this.sleep = new Buttonbar("sleep", "left")
    this.eat = new Buttonbar("eat", "right")
    this.drink = new Buttonbar("drink", "left")
    this.exercise = new Buttonbar("exercise", "right") 
    this.play = new Buttonbar("play", "left")
    this.learn = new Buttonbar("learn", "right")

Encapsulation heb ik 1x toegepast. Dit om de waarde van de score in de buttonbars terug te geven aan de levels zodat die weer de health kunnen bepalen:

dit is in de buttonbar:

    public get getScore(): number {
      return this.score;
    }

dit is in het level:

    this.health = (this.eat.getScore + this.sleep.getScore) / 2

Ik heb ook gebruik gemaakt van Composition 

    this.game.showScreen(new Lizardlevel(this.game))
    private game : Game , constructor(g:Game){..} , this.game = g
    
Inheritance heb ik gebruikt bij de verschillende levels. Deze lijken namelijk wel veel op elkaar maar zijn ieder iets verschillend. Ik heb dus een gameLevelObject.ts gemaakt waar alle gemeenschappelijke variabelen inzitten:

```
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
```

Deze roep ik in elk level aan. 

# peer review:
Ik review de game van Ismail [Link](https://github.com/IsmailHusseinCR/gamepr4)

- Classes zitten er duidelijk in. zo worden circle, rectangle, en square classes ieder meerdere keren aangeroepen. 

- Encapsulation zie ik nog niet. Probeer nog een Get of een Set te gebruiken om een van je variabelen ergens anders aan te kunnen roepen

- Composition zit erin. De Canvas kent alle shapes.

- Overerving zit er ook in. Ismail heeft duidelijk een shapes class gemaakt waarin alle gemeenschappelijke variabelen van de shapes worden opgeslagen. 


   



