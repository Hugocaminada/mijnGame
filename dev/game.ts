class Game {
    
    private currentscreen: Fishlevel | Lizardlevel | Mammallevel | Monkeylevel | Humanlevel

    constructor() {
        this.currentscreen = new Fishlevel(this)
       
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

    public showScreen(screen:  Fishlevel | Lizardlevel | Mammallevel | Monkeylevel | Humanlevel){
        this.currentscreen = screen
    }

}



// load
window.addEventListener("load", function () {
    new Game()
});