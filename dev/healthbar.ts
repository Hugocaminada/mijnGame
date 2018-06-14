class Healthbar {

    private bar: HTMLElement
    private healthPointer: HTMLElement
    private pointerPosition: number
    

    constructor(){

        let forground = document.getElementsByTagName("forground")[0]
        this.bar = document.createElement("healthbar")
        forground.appendChild(this.bar)

        this.healthPointer = document.createElement("healthpointer")
        this.bar.appendChild(this.healthPointer)
    }


    public drawPointer(healthScore){
        this.pointerPosition = healthScore * 4
        this.healthPointer.style.transform = "translate("+-this.pointerPosition+"px)"
    }
}

