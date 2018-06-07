class Game {
    
    private currentscreen: Proterolevel | Fishlevel | Lizardlevel | Mammallevel | Monkeylevel | Humanlevel

    constructor() {
        this.currentscreen = new Lizardlevel(this)
       
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

    public showScreen(screen:Proterolevel |  Fishlevel | Lizardlevel | Mammallevel | Monkeylevel | Humanlevel){
        this.currentscreen = screen
    }

}



// load
window.addEventListener("load", function () {
    new Game()
});