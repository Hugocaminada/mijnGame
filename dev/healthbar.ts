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

        //this.bar.innerHTML = "<p>Gezondheid</p>"
    }


    public drawPointer(healthScore){
        this.pointerPosition = healthScore * (this.bar.offsetWidth / 100)
        this.healthPointer.style.transform = "translate("+-this.pointerPosition+"px)"
    }
}

