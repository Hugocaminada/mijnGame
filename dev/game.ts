class Game {
    
    private currentscreen: Level 

    constructor() {
        this.currentscreen = new Fishlevel("level2", "Cephalaspis", this)
       
        this.gameLoop()
    }

    private gameLoop():void{
        this.currentscreen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    public emptyScreen(){
        let forground = document.getElementsByTagName("forground")[0]
        forground.innerHTML = ""
    }

    public showScreen(screen: Level){
        this.currentscreen = screen
    }

}



// load
window.addEventListener("load", function () {
    new Game()
});