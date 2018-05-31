class Game {
    ball : Ball = new Ball
    constructor() {
        
        new Levelone
        
        this.gameLoop()
    }

    gameLoop() : void {
        // square updaten / verplaatsen
       this.ball.move()

        requestAnimationFrame( () => this.gameLoop())
    }


}



window.addEventListener("load", () => new Game())
