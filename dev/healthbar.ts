class Healthbar {

    private healthPointer: HTMLElement
    private pointerPosition: number

    constructor(){

        let forground = document.getElementsByTagName("forground")[0]
        let bar = document.createElement("healthbar")
        forground.appendChild(bar)

        this.healthPointer = document.createElement("healthpointer")
        bar.appendChild(this.healthPointer)
    }


    public drawPointer(healthScore) : void{
        this.pointerPosition = healthScore * 4
        this.healthPointer.style.transform = "translate("+-this.pointerPosition+"px)"
    }
}

